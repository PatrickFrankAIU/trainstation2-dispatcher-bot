// TrainStation 2 Seasonal Job Data
// Switch active season by changing CURRENT_SEASON

const CURRENT_SEASON = 'summer'; // Change this to: 'spring', 'summer', 'autumn', 'winter'

const SEASONS = {
  spring: {
    name: 'Spring 2023',
    active: false,
    jobs: {
      // Spring job data goes here when available
      // Same structure as summer data below
    }
  },
  
  summer: {
    name: 'Summer 2023',
    active: true,
    jobs: {
      "Football Stadium": {
        1: { material: "Wrenches", filter: "CRAN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        2: { material: "Wrenches", filter: "CASN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        3: { material: "Wrenches", filter: "CEAN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        4: { material: "Drill Machines", filter: "CRAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        5: { material: "Drill Machines", filter: "CAAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        6: { material: "Drill Machines", filter: "CEAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        7: { material: "Garbage Trucks", filter: "CRAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        8: { material: "Garbage Trucks", filter: "CAAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        9: { material: "Garbage Trucks", filter: "CEAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        10: { material: "Road Rollers", filter: "CRSN", units: 3900, seasonPoints: 1750, optimalTrains: 13, spPerTrain: 134.6 },
        11: { material: "Road Rollers", filter: "CASN", units: 3900, seasonPoints: 1750, optimalTrains: 13, spPerTrain: 134.6 },
        12: { material: "Road Rollers", filter: "CESN", units: 3900, seasonPoints: 1750, optimalTrains: 13, spPerTrain: 134.6 },
        13: { material: "Shovels", filter: "PREN", units: 3000, seasonPoints: 2250, optimalTrains: 6, spPerTrain: 375.0 },
        14: { material: "Saws", filter: "PREN", units: 3000, seasonPoints: 2250, optimalTrains: 8, spPerTrain: 281.3 },
        15: { material: "Mixer Trucks", filter: "CLAN", units: 49300, seasonPoints: 1750, optimalTrains: 143, spPerTrain: 12.2 }
      },
      "Train Maintenance": {
        1: { material: "Wrenches", filter: "CRAN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        2: { material: "Wrenches", filter: "CASN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        3: { material: "Wrenches", filter: "CEAN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        4: { material: "Drill Machines", filter: "CRAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        5: { material: "Drill Machines", filter: "CAAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        6: { material: "Drill Machines", filter: "CEAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        7: { material: "Garbage Trucks", filter: "CRAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        8: { material: "Garbage Trucks", filter: "CAAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        9: { material: "Garbage Trucks", filter: "CEAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        10: { material: "Road Rollers", filter: "CRSN", units: 3900, seasonPoints: 1750, optimalTrains: 13, spPerTrain: 134.6 },
        11: { material: "Road Rollers", filter: "CASN", units: 3900, seasonPoints: 1750, optimalTrains: 13, spPerTrain: 134.6 },
        12: { material: "Road Rollers", filter: "CESN", units: 3900, seasonPoints: 1750, optimalTrains: 13, spPerTrain: 134.6 },
        13: { material: "Shovels", filter: "PREN", units: 3000, seasonPoints: 2250, optimalTrains: 6, spPerTrain: 375.0 },
        14: { material: "Saws", filter: "PREN", units: 3000, seasonPoints: 2250, optimalTrains: 8, spPerTrain: 281.3 },
        15: { material: "Mixer Trucks", filter: "CLAN", units: 49300, seasonPoints: 1750, optimalTrains: 143, spPerTrain: 12.2 },
        16: { material: "Shovels", filter: "PRSN", units: 3000, seasonPoints: 2250, optimalTrains: 6, spPerTrain: 375.0 },
        17: { material: "Saws", filter: "PRSN", units: 3000, seasonPoints: 2250, optimalTrains: 8, spPerTrain: 281.3 },
        18: { material: "Mixer Trucks", filter: "CLASN", units: 49300, seasonPoints: 1750, optimalTrains: 143, spPerTrain: 12.2 }
      },
      "Aqua Park": {
        1: { material: "Wrenches", filter: "CRAN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        2: { material: "Wrenches", filter: "CASN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        3: { material: "Wrenches", filter: "CEAN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        4: { material: "Drill Machines", filter: "CRAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        5: { material: "Drill Machines", filter: "CAAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        6: { material: "Drill Machines", filter: "CEAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        7: { material: "Garbage Trucks", filter: "CRAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        8: { material: "Garbage Trucks", filter: "CCAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        9: { material: "Garbage Trucks", filter: "CEAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        10: { material: "Road Rollers", filter: "CRSN", units: 3900, seasonPoints: 1750, optimalTrains: 13, spPerTrain: 134.6 },
        11: { material: "Road Rollers", filter: "CASN", units: 3900, seasonPoints: 1750, optimalTrains: 13, spPerTrain: 134.6 },
        12: { material: "Road Rollers", filter: "CESN", units: 3900, seasonPoints: 1750, optimalTrains: 13, spPerTrain: 134.6 },
        13: { material: "Shovels", filter: "PREN", units: 3000, seasonPoints: 2250, optimalTrains: 6, spPerTrain: 375.0 },
        14: { material: "Saws", filter: "PREN", units: 3000, seasonPoints: 2250, optimalTrains: 8, spPerTrain: 281.3 },
        15: { material: "Mixer Trucks", filter: "CLAN", units: 49300, seasonPoints: 1750, optimalTrains: 143, spPerTrain: 12.2 },
        16: { material: "Shovels", filter: "PRSN", units: 3000, seasonPoints: 2250, optimalTrains: 6, spPerTrain: 375.0 },
        17: { material: "Saws", filter: "PRSN", units: 3000, seasonPoints: 2250, optimalTrains: 8, spPerTrain: 281.3 },
        18: { material: "Mixer Trucks", filter: "CLASN", units: 49300, seasonPoints: 1750, optimalTrains: 143, spPerTrain: 12.2 }
      },
      "Cement Factory": {
        1: { material: "Wrenches", filter: "CRAN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        2: { material: "Wrenches", filter: "CASN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        3: { material: "Wrenches", filter: "CEAN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        4: { material: "Drill Machines", filter: "CRAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        5: { material: "Drill Machines", filter: "CAAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        6: { material: "Drill Machines", filter: "CEAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        7: { material: "Garbage Trucks", filter: "CRAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        8: { material: "Garbage Trucks", filter: "CAAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        9: { material: "Garbage Trucks", filter: "CEAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        10: { material: "Mixer Trucks", filter: "CLAN", units: 49300, seasonPoints: 1750, optimalTrains: 143, spPerTrain: 12.2 }
      },
      "Highway": {
        1: { material: "Wrenches", filter: "CRAN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        2: { material: "Wrenches", filter: "CASN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        3: { material: "Wrenches", filter: "CEAN", units: 4800, seasonPoints: 2250, optimalTrains: 12, spPerTrain: 187.5 },
        4: { material: "Drill Machines", filter: "CRAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        5: { material: "Drill Machines", filter: "CAAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        6: { material: "Drill Machines", filter: "CEAY", units: 3900, seasonPoints: 1900, optimalTrains: 13, spPerTrain: 146.2 },
        8: { material: "Garbage Trucks", filter: "CAAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        9: { material: "Garbage Trucks", filter: "CEAY", units: 7800, seasonPoints: 3000, optimalTrains: 39, spPerTrain: 76.9 },
        10: { material: "Road Rollers", filter: "CRSN", units: 3900, seasonPoints: 1750, optimalTrains: 13, spPerTrain: 134.6 },
        11: { material: "Road Rollers", filter: "CASN", units: 3900, seasonPoints: 1750, optimalTrains: 13, spPerTrain: 134.6 },
        12: { material: "Road Rollers", filter: "CESN", units: 3900, seasonPoints: 1750, optimalTrains: 13, spPerTrain: 134.6 },
        13: { material: "Shovels", filter: "PREN", units: 3000, seasonPoints: 2250, optimalTrains: 6, spPerTrain: 375.0 },
        14: { material: "Saws", filter: "PREN", units: 3000, seasonPoints: 2250, optimalTrains: 8, spPerTrain: 281.3 },
        15: { material: "Mixer Trucks", filter: "CLAN", units: 49300, seasonPoints: 1750, optimalTrains: 143, spPerTrain: 12.2 },
        16: { material: "Mixer Trucks", filter: "CLASN", units: 49300, seasonPoints: 1750, optimalTrains: 143, spPerTrain: 12.2 }
      }
    }
  },
  
  autumn: {
    name: 'Autumn 2023',
    active: false,
    jobs: {
      // Autumn job data goes here when available
      // Example placeholder:
      // "Factory Site": {
      //   1: { material: "Steel Beams", filter: "AUTM", units: 5000, seasonPoints: 2500, optimalTrains: 15, spPerTrain: 166.7 }
      // }
    }
  },
  
  winter: {
    name: 'Winter 2023',
    active: false,
    jobs: {
      // Winter job data goes here when available
    }
  }
};

// Helper functions
function getCurrentSeason() {
  return SEASONS[CURRENT_SEASON];
}

function getCurrentSeasonName() {
  return SEASONS[CURRENT_SEASON].name;
}

function getCurrentJobs() {
  return SEASONS[CURRENT_SEASON].jobs;
}

function getAllSeasons() {
  return Object.keys(SEASONS);
}

function getSeasonInfo(seasonKey) {
  return SEASONS[seasonKey] || null;
}

// Export for use in bot
module.exports = {
  CURRENT_SEASON,
  SEASONS,
  getCurrentSeason,
  getCurrentSeasonName,
  getCurrentJobs,
  getAllSeasons,
  getSeasonInfo
};