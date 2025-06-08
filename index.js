require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const express = require('express');
const { getCurrentJobs, getCurrentSeasonName, getAllSeasons, getSeasonInfo } = require('./src/data/seasons.js');
const { decodeFilter, decodeFilterShort } = require('./src/utils/filterDecoder.js');

// Express web server for Render.com
const app = express();
const PORT = process.env.PORT || 3000;

// Basic health check endpoint
app.get('/', (req, res) => {
  const jobData = getCurrentJobs();
  res.json({ 
    status: 'Dispatcher Bot is Online!',
    currentSeason: getCurrentSeasonName(),
    jobs: Object.keys(jobData).length,
    uptime: process.uptime()
  });
});

// Bot stats endpoint
app.get('/stats', (req, res) => {
  const jobData = getCurrentJobs();
  let totalJobs = 0;
  for (let site in jobData) {
    totalJobs = totalJobs + Object.keys(jobData[site]).length;
  }
  
  res.json({
    currentSeason: getCurrentSeasonName(),
    totalJobs: totalJobs,
    sites: Object.keys(jobData),
    uptime: process.uptime(),
    botOnline: client.readyAt ? true : false,
    availableSeasons: getAllSeasons()
  });
});

app.listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});

// Discord bot setup
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ] 
});

// Bot ready event
client.once('ready', () => {
  console.log(`Dispatcher is online! Logged in as ${client.user.tag}`);
  client.user.setActivity(`${getCurrentSeasonName()} Jobs`, { type: 'WATCHING' });
});

// Command handler
client.on('messageCreate', (message) => {
  // Ignore bot messages (including our own bot)
  if (message.author.bot) {
    return;
  }
  
  // Only respond to messages in guilds (servers), not DMs
  if (!message.guild) {
    return;
  }
  
  // Check if message starts with command prefix
  if (!message.content.startsWith('!')) {
    return;
  }
  
  // Parse command and arguments
  let args = message.content.slice(1).trim().split(/ +/);
  let command = args.shift().toLowerCase();
  
  // Handle different commands
  if (command === 'job') {
    handleJobCommand(message, args);
  } else if (command === 'material') {
    handleMaterialCommand(message, args);
  } else if (command === 'filter') {
    handleFilterCommand(message, args);
  } else if (command === 'best') {
    handleBestCommand(message, args);
  } else if (command === 'commands' || command === 'help') {
    handleHelpCommand(message);
  } else if (command === 'sites') {
    handleSitesCommand(message);
  } else if (command === 'season') {
    handleSeasonCommand(message, args);
  } else if (command === 'filters') {
    handleFiltersCommand(message);
  }
});

// Job lookup command: !job aqua 8
function handleJobCommand(message, args) {
  const jobData = getCurrentJobs();
  
  if (args.length < 2) {
    message.reply('Usage: `!job <site> <number>`\nExample: `!job aqua 8`');
    return;
  }
  
  let siteName = args[0].toLowerCase();
  let jobNumber = parseInt(args[1]);
  
  // Find the site (allow partial matching)
  let foundSite = null;
  for (let site in jobData) {
    if (site.toLowerCase().includes(siteName) || siteName.includes(site.toLowerCase())) {
      foundSite = site;
      break;
    }
  }
  
  if (!foundSite) {
    message.reply('Site not found! Use `!sites` to see available sites.');
    return;
  }
  
  if (!jobData[foundSite][jobNumber]) {
    let maxJobs = Object.keys(jobData[foundSite]).length;
    message.reply(`Job ${jobNumber} not found! ${foundSite} has jobs 1-${maxJobs}.`);
    return;
  }
  
  let job = jobData[foundSite][jobNumber];
  
  let embed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`🚂 ${foundSite} Job #${jobNumber}`)
    .addFields(
      { name: '🔧 Material', value: job.material, inline: true },
      { name: '🏷️ Filter Code', value: job.filter, inline: true },
      { name: '📦 Units', value: job.units.toString(), inline: true },
      { name: '🎯 Filter Details', value: decodeFilterShort(job.filter), inline: false }
    )
    .setFooter({ text: 'Summer 2025 • Dispatcher Bot' });
  
  message.reply({ embeds: [embed] });
}

// Filter explanation command
function handleFiltersCommand(message) {
  let embed = new EmbedBuilder()
    .setColor(0x6A5ACD)
    .setTitle('🎯 Filter Code System')
    .setDescription('TrainStation 2 uses 4-letter codes to specify train requirements')
    .addFields(
      { name: '📍 Position 1: Region', value: '**C** = Current region\n**P** = Prior region', inline: true },
      { name: '⭐ Position 2: Rarity', value: '**L** = Legendary\n**E** = Epic\n**R** = Rare\n**C** = Common\n**A** = Any', inline: true },
      { name: '⛽ Position 3: Fuel', value: '**S** = Steam\n**D** = Diesel\n**E** = Electric\n**A** = Any', inline: true },
      { name: '🏷️ Position 4: Union', value: '**Y** = Yes (union-badged)\n**N** = No (non-union)', inline: true },
      { name: '💡 Example', value: '**CRAY** = Current region, Rare rarity, Any fuel, Yes union-badged', inline: false }
    )
    .setFooter({ text: 'Use !filter <CODE> to find jobs with specific requirements' });
  
  message.reply({ embeds: [embed] });
}

// Material search command: !material saws
function handleMaterialCommand(message, args) {
  const jobData = getCurrentJobs();
  
  if (args.length === 0) {
    message.reply('Usage: `!material <material name>`\nExample: `!material saws`');
    return;
  }
  
  let searchMaterial = args.join(' ').toLowerCase();
  let foundJobs = [];
  
  for (let site in jobData) {
    for (let jobNum in jobData[site]) {
      let job = jobData[site][jobNum];
      if (job.material.toLowerCase().includes(searchMaterial)) {
        foundJobs.push({
          site: site,
          number: jobNum,
          material: job.material,
          filter: job.filter,
          seasonPoints: job.seasonPoints
        });
      }
    }
  }
  
  if (foundJobs.length === 0) {
    message.reply(`No jobs found using "${searchMaterial}"`);
    return;
  }
  
  let embed = new EmbedBuilder()
    .setColor(0x00FF00)
    .setTitle(`🔧 Jobs using "${searchMaterial}"`);
  
  let description = '';
  for (let job of foundJobs) {
    let filterExplanation = decodeFilterShort(job.filter);
    description = description + `**${job.site}** #${job.number} (${job.filter}: ${filterExplanation}) - ${job.seasonPoints} SP\n`;
  }
  
  embed.setDescription(description);
  message.reply({ embeds: [embed] });
}

// Filter search command: !filter CCAY
function handleFilterCommand(message, args) {
  const jobData = getCurrentJobs();
  
  if (args.length === 0) {
    message.reply('Usage: `!filter <filter code>`\nExample: `!filter CCAY`');
    return;
  }
  
  let searchFilter = args[0].toUpperCase();
  let foundJobs = [];
  
  for (let site in jobData) {
    for (let jobNum in jobData[site]) {
      let job = jobData[site][jobNum];
      if (job.filter === searchFilter) {
        foundJobs.push({
          site: site,
          number: jobNum,
          material: job.material,
          seasonPoints: job.seasonPoints
        });
      }
    }
  }
  
  if (foundJobs.length === 0) {
    message.reply(`No jobs found with filter "${searchFilter}"`);
    return;
  }
  
  let embed = new EmbedBuilder()
    .setColor(0xFF9900)
    .setTitle(`🏷️ Jobs with filter "${searchFilter}"`);
  
  let description = '';
  for (let job of foundJobs) {
    let filterExplanation = decodeFilterShort(job.filter);
    description = description + `**${job.site}** #${job.number} - ${job.material} (${job.filter}: ${filterExplanation}) - ${job.seasonPoints} SP\n`;
  }
  
  embed.setDescription(description);
  message.reply({ embeds: [embed] });
}

// Best ratios command: !best aqua
function handleBestCommand(message, args) {
  const jobData = getCurrentJobs();
  
  if (args.length === 0) {
    message.reply('Usage: `!best <site>`\nExample: `!best aqua`');
    return;
  }
  
  let siteName = args[0].toLowerCase();
  
  // Find the site
  let foundSite = null;
  for (let site in jobData) {
    if (site.toLowerCase().includes(siteName) || siteName.includes(site.toLowerCase())) {
      foundSite = site;
      break;
    }
  }
  
  if (!foundSite) {
    message.reply('Site not found! Use `!sites` to see available sites.');
    return;
  }
  
  // Get all jobs for this site and sort by SP per train
  let jobs = [];
  for (let jobNum in jobData[foundSite]) {
    let job = jobData[foundSite][jobNum];
    jobs.push({
      number: jobNum,
      material: job.material,
      spPerTrain: job.spPerTrain,
      seasonPoints: job.seasonPoints
    });
  }
  
  // Sort by SP per train (highest first)
  jobs.sort((a, b) => b.spPerTrain - a.spPerTrain);
  
  let embed = new EmbedBuilder()
    .setColor(0xFFD700)
    .setTitle(`📊 Best SP/Train Ratios - ${foundSite}`);
  
  let description = '';
  for (let i = 0; i < Math.min(5, jobs.length); i++) {
    let job = jobs[i];
    description = description + `${i + 1}. Job #${job.number} - ${job.material} (${job.spPerTrain} SP/train)\n`;
  }
  
  embed.setDescription(description);
  message.reply({ embeds: [embed] });
}

// Help command
function handleHelpCommand(message) {
  let embed = new EmbedBuilder()
    .setColor(0x9932CC)
    .setTitle('🚂 Dispatcher Bot Commands')
    .setDescription(`Your TrainStation 2 job assistant • Currently: **${getCurrentSeasonName()}**`)
    .addFields(
      { name: '`!job <site> <number>`', value: 'Get specific job info\nExample: `!job aqua 8`' },
      { name: '`!material <name>`', value: 'Find jobs using a material\nExample: `!material saws`' },
      { name: '`!filter <code>`', value: 'Find jobs with filter code\nExample: `!filter CCAY`' },
      { name: '`!best <site>`', value: 'Best SP/train ratios for site\nExample: `!best football`' },
      { name: '`!sites`', value: 'List all available job sites' },
      { name: '`!season`', value: 'Show current season info' },
      { name: '`!filters`', value: 'Explain filter code system' },
      { name: '`!commands`', value: 'Show this help message' }
    )
    .setFooter({ text: 'TrainStation 2 • Open Source • github.com/yourname/trainstation2-dispatcher-bot' });
  
  message.reply({ embeds: [embed] });
}

// Sites command
function handleSitesCommand(message) {
  const jobData = getCurrentJobs();
  
  let siteList = '';
  for (let site in jobData) {
    let jobCount = Object.keys(jobData[site]).length;
    siteList = siteList + `**${site}** - ${jobCount} jobs\n`;
  }
  
  let embed = new EmbedBuilder()
    .setColor(0x32CD32)
    .setTitle(`🏗️ Available Job Sites - ${getCurrentSeasonName()}`)
    .setDescription(siteList)
    .setFooter({ text: 'Use: !job <site> <number> to get specific job info' });
  
  message.reply({ embeds: [embed] });
}

// Season info command
function handleSeasonCommand(message, args) {
  const currentSeason = getCurrentSeasonName();
  const availableSeasons = getAllSeasons();
  const jobData = getCurrentJobs();
  
  let totalJobs = 0;
  for (let site in jobData) {
    totalJobs = totalJobs + Object.keys(jobData[site]).length;
  }
  
  let embed = new EmbedBuilder()
    .setColor(0xFF6B35)
    .setTitle('🌟 Season Information')
    .addFields(
      { name: '📅 Current Season', value: currentSeason, inline: true },
      { name: '📊 Total Jobs', value: totalJobs.toString(), inline: true },
      { name: '🏗️ Job Sites', value: Object.keys(jobData).length.toString(), inline: true }
    )
    .setDescription('Bot data is updated manually between seasons.')
    .setFooter({ text: 'Available: ' + availableSeasons.join(', ') });
  
  message.reply({ embeds: [embed] });
}

// Login to Discord
client.login(process.env.DISCORD_TOKEN);