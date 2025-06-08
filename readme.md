# 🚂 TrainStation 2 Dispatcher Bot

A Discord bot for TrainStation 2 players to quickly lookup job information, materials, filters, and efficiency data for Union storyline jobs. The bot currently has only Summer Season data, but includes hooks to switch the dataset each season, and will be updated. 

## ✨ Features

- **Job Lookup**: Get detailed information about specific jobs
- **Material Search**: Find all jobs that use a specific material
- **Filter Search**: Search by 4-letter filter codes
- **Efficiency Analysis**: View best SP/train ratios by site
- **Site Overview**: List all available job sites
- **Always Online**: Hosted on Render.com with 24/7 uptime

## 🎮 Commands

| Command | Description | Example |
|---------|-------------|---------|
| `!job <site> <number>` | Get specific job details | `!job aqua 8` |
| `!material <name>` | Find jobs using material | `!material saws` |
| `!filter <code>` | Find jobs with filter code | `!filter CCAY` |
| `!best <site>` | Best SP/train ratios for site | `!best football` |
| `!sites` | List all available job sites | `!sites` |
| `!help` | Show help message | `!help` |

## 📊 Supported Job Sites

- **Football Stadium** (15 jobs)
- **Train Maintenance** (18 jobs)  
- **Aqua Park** (18 jobs)
- **Cement Factory** (10 jobs)
- **Highway** (16 jobs)

**Total: 77 jobs across 5 sites**

## 🚀 Setup for Development

### Prerequisites
- Node.js 16+ 
- Discord Bot Token
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/trainstation2-dispatcher-bot.git
   cd trainstation2-dispatcher-bot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env and add your Discord bot token
   ```

4. **Run the bot**
   ```bash
   npm start
   ```

### Creating a Discord Bot

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to "Bot" section and create a bot
4. Copy the bot token to your `.env` file
5. Go to "OAuth2" → "URL Generator"
6. Select "bot" scope and "Send Messages" permission
7. Use the generated URL to invite the bot to your server

## 🌐 Deployment on Render.com

### Setup

1. **Connect to GitHub**
   - Create account on [Render.com](https://render.com)
   - Connect your GitHub repository

2. **Create Web Service**
   - Select "Web Service" (not Background Worker)
   - Choose your repository
   - Build command: `npm install`
   - Start command: `npm start`

3. **Environment Variables**
   - Add `DISCORD_TOKEN` with your bot token

4. **Deploy**
   - Render will automatically deploy on git push

### Health Check

The bot includes a web server for Render.com compatibility:
- Health check: `https://your-app.onrender.com/`
- Bot stats: `https://your-app.onrender.com/stats`

## 📁 Project Structure

```
trainstation2-dispatcher-bot/
├── src/
│   ├── data/
│   │   └── jobs.js           # TrainStation 2 job data
│   ├── commands/             # Command handlers (future)
│   └── utils/                # Utility functions (future)
├── index.js                  # Main bot + web server
├── package.json              # Dependencies
├── .env.example              # Environment variables template
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🌟 Seasonal Data Management

The bot supports all four TrainStation 2 seasons with easy switching between them:

- **Current Season**: Summer 2023 (77 jobs)
- **Available Seasons**: Spring, Summer, Autumn, Winter
- **Manual Updates**: Bot data is updated manually between seasons

**For Admins:** See [SEASON_SWITCHING.md](SEASON_SWITCHING.md) for detailed instructions on:
- Switching between seasons
- Adding new seasonal job data
- Deployment workflow for season changes

**Quick Switch:** Change `CURRENT_SEASON` in `src/data/seasons.js` and redeploy.

## 🛠️ Data Structure

Each job contains:
- **material**: Type of resource needed
- **filter**: 4-letter filter code
- **units**: Number of units required
- **seasonPoints**: SP reward for completion
- **optimalTrains**: Optimal number of trains
- **spPerTrain**: Season points per train efficiency

## 🤝 Contributing

This is an open source project! Contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for contributions:
- Add more job data (other storylines, events)
- Improve command parsing and error handling
- Add scheduling/planning features
- Create web dashboard
- Add support for other train simulation games

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] Add job scheduling features
- [ ] Material cost tracking  
- [ ] Player progress tracking
- [ ] Integration with game save files
- [ ] Support for other TrainStation 2 events
- [ ] Web dashboard interface
- [ ] Multi-language support
- [ ] Automated season data updates
- [ ] Spring/Autumn/Winter 2023 job data

## 🙋‍♂️ Support

- **Issues**: [GitHub Issues](https://github.com/PatrickFrankAIU/trainstation2-dispatcher-bot/issues)
- **Discord**: Join our community server - https://discord.gg/jUnmeaeSad
- **Email**: pat.frank@gmail.com

## 🏷️ Version

Current version: **1.0.0**

Built with ❤️ for the TrainStation 2 community. Contributions welcome! 