# 🌟 Season Switching Guide

This guide explains how to switch the bot between different TrainStation 2 seasons.

## 🔄 Quick Season Switch

**To change the active season:**

1. Open `src/data/seasons.js`
2. Find this line at the top:
   ```javascript
   const CURRENT_SEASON = 'summer'; // Change this to: 'spring', 'summer', 'autumn', 'winter'
   ```
3. Change `'summer'` to the desired season:
   - `'spring'` for Spring data
   - `'summer'` for Summer data  
   - `'autumn'` for Autumn data
   - `'winter'` for Winter data

4. Save the file
5. **Restart the bot** (if running locally) or **redeploy** (if on Render.com)

## 📊 Adding New Season Data

**When you get data for a new season:**

1. Open `src/data/seasons.js`
2. Find the appropriate season object (spring, autumn, or winter)
3. Replace the empty `jobs: {}` with the new job data
4. Set `active: true` if this will be the current season
5. Update the season name if needed

**Example - Adding Spring data:**
```javascript
spring: {
  name: 'Spring 2024',
  active: false,  // Set to true when switching to this season
  jobs: {
    "New Spring Site": {
      1: { material: "New Material", filter: "SPRG", units: 5000, seasonPoints: 2500, optimalTrains: 15, spPerTrain: 166.7 }
      // ... more jobs
    }
  }
}
```

## 🚀 Deployment Updates

### Local Development
```bash
# After changing CURRENT_SEASON, restart the bot:
npm start
```

### Render.com Deployment
1. Commit your changes to git:
   ```bash
   git add .
   git commit -m "Switch to [SEASON_NAME] season"
   git push
   ```
2. Render.com will automatically redeploy
3. Bot will restart with new season data

## 📅 Seasonal Workflow

**Recommended process for each season:**

### Week Before Season Starts
1. Get new job data from community/dataminers
2. Add data to appropriate season in `seasons.js` 
3. Test locally with new data
4. Create a git branch for the new season

### Week Between Seasons  
1. Switch `CURRENT_SEASON` to new season
2. Deploy to production
3. Announce in Discord that bot is updated
4. Monitor for any issues

### During Season
- Bot automatically serves current season data
- No changes needed unless fixing bugs/errors

## 🛠️ Advanced: Multiple Season Support

**Future enhancement idea:**
You could add commands to let users switch seasons temporarily:

```javascript
// Example future feature:
!season spring     // Show spring jobs
!season summer     // Show summer jobs  
!season current    // Show current season info
```

## 📝 Data Structure Reference

Each season should follow this structure:
```javascript
seasonName: {
  name: 'Display Name for Season',
  active: true/false,  // Not currently used but good for tracking
  jobs: {
    "Site Name": {
      1: { 
        material: "Material Type", 
        filter: "4-LETTER-CODE", 
        units: 1000, 
        seasonPoints: 500, 
        optimalTrains: 10, 
        spPerTrain: 50.0 
      }
      // ... more jobs
    }
    // ... more sites
  }
}
```

## ⚠️ Important Notes

- **Always test locally** before deploying season changes
- **Backup current data** before making major changes  
- **Coordinate with community** about timing of season switches
- **Update bot status** message when switching seasons
- **Monitor Discord** for user questions after switches

## 🤝 Community Coordination

**Recommended Discord announcement:**
```
🌟 **Season Update** 🌟
Dispatcher bot has been updated for **[NEW SEASON NAME]**!

📊 New Data:
- X total jobs across Y sites
- Updated materials and filters
- Fresh SP/train efficiency calculations

Use `!season` to see current season info
Use `!help` for all available commands

Happy training! 🚂
```