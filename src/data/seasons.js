// CORRECTED TrainStation 2 Summer 2023 Job Data
// Accurately transcribed from Google Doc: "Summer 23 Storyline Jobs for bot"

const CURRENT_SEASON = 'summer';

const SEASONS = {
  spring: {
    name: 'Spring 2023',
    active: false,
    jobs: {}
  },
  
  summer: {
    name: 'Summer 2023', 
    active: true,
    jobs: {
      "Football Stadium": {
        1: { material: "Wrenches", filter: "CRAN", units: 12800, seasonPoints: 1750, optimalTrains: 40, spPerTrain: 43.75 },
        2: { material: "Drill Machines", filter: "CASN", units: 21300, seasonPoints: 1750, optimalTrains: 80, spPerTrain: 21.88 },
        3: { material: "Garbage Trucks", filter: "CEAN", units: 20300, seasonPoints: 1750, optimalTrains: 60, spPerTrain: 29.17 },
        4: { material: "Road Rollers", filter: "PCAN", units: 10000, seasonPoints: 1750, optimalTrains: 30, spPerTrain: 58.33 },
        5: { material: "Shovels", filter: "CADN", units: 23500, seasonPoints: 2000, optimalTrains: 80, spPerTrain: 25.0 },
        6: { material: "Garbage Trucks", filter: "CREN", units: 12000, seasonPoints: 2000, optimalTrains: 40, spPerTrain: 50.0 },
        7: { material: "Drill Machines", filter: "CAAY", units: 15500, seasonPoints: 2000, optimalTrains: 60, spPerTrain: 33.33 },
        8: { material: "Road Rollers", filter: "CLAN", units: 31800, seasonPoints: 2000, optimalTrains: 80, spPerTrain: 25.0 },
        9: { material: "Wrenches", filter: "PADN", units: 26000, seasonPoints: 2250, optimalTrains: 80, spPerTrain: 28.13 },
        10: { material: "Saws", filter: "CAAY", units: 16800, seasonPoints: 2250, optimalTrains: 60, spPerTrain: 37.5 },
        11: { material: "Drill Machines", filter: "CEAN", units: 26000, seasonPoints: 2250, optimalTrains: 60, spPerTrain: 37.5 },
        12: { material: "Wrenches", filter: "CLAN", units: 35000, seasonPoints: 2250, optimalTrains: 80, spPerTrain: 28.13 },
        13: { material: "Road Rollers", filter: "CAAY", units: 18300, seasonPoints: 2500, optimalTrains: 60, spPerTrain: 41.67 },
        14: { material: "Garbage Trucks", filter: "CRSN", units: 14800, seasonPoints: 2500, optimalTrains: 40, spPerTrain: 62.5 },
        15: { material: "Mixer Trucks", filter: "PESN", units: 22800, seasonPoints: 2500, optimalTrains: 60, spPerTrain: 41.67 }
      },
      
      "Train Maintenance": {
        1: { material: "Wrenches", filter: "CLSN", units: 30800, seasonPoints: 2500, optimalTrains: 80, spPerTrain: 31.25 },
        2: { material: "Drill Machines", filter: "CCEN", units: 11000, seasonPoints: 2500, optimalTrains: 30, spPerTrain: 83.33 },
        3: { material: "Garbage Trucks", filter: "CAAY", units: 20000, seasonPoints: 2750, optimalTrains: 60, spPerTrain: 45.83 },
        4: { material: "Road Rollers", filter: "PESN", units: 24500, seasonPoints: 2750, optimalTrains: 60, spPerTrain: 45.83 },
        5: { material: "Mixer Trucks", filter: "CEEN", units: 25000, seasonPoints: 2750, optimalTrains: 60, spPerTrain: 45.83 },
        6: { material: "Drill Machines", filter: "CCAY", units: 7500, seasonPoints: 2750, optimalTrains: 20, spPerTrain: 137.5 },
        7: { material: "Road Rollers", filter: "PRSN", units: 17300, seasonPoints: 2750, optimalTrains: 40, spPerTrain: 68.75 },
        8: { material: "Wrenches", filter: "CLDN", units: 34800, seasonPoints: 2750, optimalTrains: 80, spPerTrain: 34.38 },
        9: { material: "Garbage Trucks", filter: "PLEN", units: 35500, seasonPoints: 3000, optimalTrains: 80, spPerTrain: 37.5 },
        10: { material: "Saws", filter: "CCAN", units: 15800, seasonPoints: 3000, optimalTrains: 30, spPerTrain: 100.0 },
        11: { material: "Wrenches", filter: "CEEN", units: 27300, seasonPoints: 3000, optimalTrains: 60, spPerTrain: 50.0 },
        12: { material: "Road Rollers", filter: "CEAN", units: 34500, seasonPoints: 3000, optimalTrains: 60, spPerTrain: 50.0 },
        13: { material: "Drill Machines", filter: "CAAY", units: 23500, seasonPoints: 3000, optimalTrains: 60, spPerTrain: 50.0 },
        14: { material: "Garbage Trucks", filter: "CAAY", units: 23800, seasonPoints: 3250, optimalTrains: 60, spPerTrain: 54.17 },
        15: { material: "Shovels", filter: "PRAN", units: 24000, seasonPoints: 3250, optimalTrains: 40, spPerTrain: 81.25 },
        16: { material: "Garbage Trucks", filter: "CEEN", units: 29300, seasonPoints: 3250, optimalTrains: 60, spPerTrain: 54.17 },
        17: { material: "Drill Machines", filter: "CLAN", units: 49300, seasonPoints: 3250, optimalTrains: 80, spPerTrain: 40.63 },
        18: { material: "Road Rollers", filter: "CCSN", units: 14000, seasonPoints: 3250, optimalTrains: 30, spPerTrain: 108.33 }
      },
      
      "Aqua Park": {
        1: { material: "Shovels", filter: "PCSN", units: 11000, seasonPoints: 2500, optimalTrains: 30, spPerTrain: 83.33 },
        2: { material: "Saws", filter: "PREN", units: 16000, seasonPoints: 2500, optimalTrains: 40, spPerTrain: 62.5 },
        3: { material: "Mixer Trucks", filter: "CAAN", units: 40500, seasonPoints: 2750, optimalTrains: 80, spPerTrain: 34.38 },
        4: { material: "Road Rollers", filter: "CLAN", units: 41000, seasonPoints: 2750, optimalTrains: 80, spPerTrain: 34.38 },
        5: { material: "Saws", filter: "PAEN", units: 33300, seasonPoints: 2750, optimalTrains: 80, spPerTrain: 34.38 },
        6: { material: "Mixer Trucks", filter: "CAAY", units: 21500, seasonPoints: 2750, optimalTrains: 60, spPerTrain: 45.83 },
        7: { material: "Shovels", filter: "CESN", units: 26000, seasonPoints: 2750, optimalTrains: 60, spPerTrain: 45.83 },
        8: { material: "Garbage Trucks", filter: "CCAY", units: 7800, seasonPoints: 3000, optimalTrains: 20, spPerTrain: 150.0 },
        9: { material: "Mixer Trucks", filter: "PCAN", units: 15500, seasonPoints: 3000, optimalTrains: 30, spPerTrain: 100.0 },
        10: { material: "Saws", filter: "CLEN", units: 36300, seasonPoints: 3000, optimalTrains: 80, spPerTrain: 37.5 },
        11: { material: "Shovels", filter: "CESN", units: 27800, seasonPoints: 3000, optimalTrains: 60, spPerTrain: 50.0 },
        12: { material: "Drill Machines", filter: "PLAN", units: 46500, seasonPoints: 3000, optimalTrains: 80, spPerTrain: 37.5 },
        13: { material: "Road Rollers", filter: "CCSN", units: 13300, seasonPoints: 3000, optimalTrains: 30, spPerTrain: 100.0 },
        14: { material: "Saws", filter: "CRDN", units: 19000, seasonPoints: 3250, optimalTrains: 40, spPerTrain: 81.25 },
        15: { material: "Mixer Trucks", filter: "CEAN", units: 36500, seasonPoints: 3250, optimalTrains: 60, spPerTrain: 54.17 },
        16: { material: "Shovels", filter: "CAAY", units: 24800, seasonPoints: 3250, optimalTrains: 60, spPerTrain: 54.17 },
        17: { material: "Road Rollers", filter: "CCSN", units: 14000, seasonPoints: 3250, optimalTrains: 30, spPerTrain: 108.33 },
        18: { material: "Shovels", filter: "CRAY", units: 12800, seasonPoints: 3250, optimalTrains: 30, spPerTrain: 108.33 }
      },
      
      "Cement Factory": {
        1: { material: "Wrenches", filter: "CAEN", units: 40300, seasonPoints: 3250, optimalTrains: 80, spPerTrain: 40.63 },
        2: { material: "Saws", filter: "CCAY", units: 9000, seasonPoints: 3250, optimalTrains: 20, spPerTrain: 162.5 },
        3: { material: "Drill Machines", filter: "CLSN", units: 40800, seasonPoints: 3250, optimalTrains: 80, spPerTrain: 40.63 },
        4: { material: "Road Rollers", filter: "PCDN", units: 14500, seasonPoints: 3500, optimalTrains: 30, spPerTrain: 116.67 },
        5: { material: "Wrenches", filter: "PASN", units: 41000, seasonPoints: 3500, optimalTrains: 80, spPerTrain: 43.75 },
        6: { material: "Garbage Trucks", filter: "PLAN", units: 51800, seasonPoints: 3500, optimalTrains: 80, spPerTrain: 43.75 },
        7: { material: "Mixer Trucks", filter: "PEAN", units: 39500, seasonPoints: 3500, optimalTrains: 60, spPerTrain: 58.33 },
        8: { material: "Wrenches", filter: "PAEN", units: 42000, seasonPoints: 3500, optimalTrains: 80, spPerTrain: 43.75 },
        9: { material: "Drill Machines", filter: "PCDN", units: 15000, seasonPoints: 3500, optimalTrains: 30, spPerTrain: 116.67 },
        10: { material: "Garbage Trucks", filter: "PEAN", units: 39800, seasonPoints: 3500, optimalTrains: 60, spPerTrain: 58.33 }
      },
      
      "Highway": {
        1: { material: "Wrenches", filter: "CAEN", units: 40300, seasonPoints: 3250, optimalTrains: 80, spPerTrain: 40.63 },
        2: { material: "Saws", filter: "CCAY", units: 9000, seasonPoints: 3250, optimalTrains: 20, spPerTrain: 162.5 },
        3: { material: "Drill Machines", filter: "CLSN", units: 40800, seasonPoints: 3250, optimalTrains: 80, spPerTrain: 40.63 },
        4: { material: "Road Rollers", filter: "PCDN", units: 14500, seasonPoints: 3500, optimalTrains: 30, spPerTrain: 116.67 },
        5: { material: "Wrenches", filter: "PASN", units: 41000, seasonPoints: 3500, optimalTrains: 80, spPerTrain: 43.75 },
        6: { material: "Garbage Trucks", filter: "PLAN", units: 51800, seasonPoints: 3500, optimalTrains: 80, spPerTrain: 43.75 },
        // Note: Job 7 is missing from the source data
        8: { material: "Wrenches", filter: "PAEN", units: 42000, seasonPoints: 3500, optimalTrains: 80, spPerTrain: 43.75 },
        9: { material: "Drill Machines", filter: "PCDN", units: 15000, seasonPoints: 3500, optimalTrains: 30, spPerTrain: 116.67 },
        10: { material: "Garbage Trucks", filter: "PEAN", units: 39800, seasonPoints: 3500, optimalTrains: 60, spPerTrain: 58.33 },
        11: { material: "Road Rollers", filter: "PLEN", units: 43000, seasonPoints: 3500, optimalTrains: 80, spPerTrain: 43.75 },
        12: { material: "Saws", filter: "PADN", units: 43000, seasonPoints: 3500, optimalTrains: 80, spPerTrain: 43.75 },
        13: { material: "Drill Machines", filter: "CEAY", units: 20300, seasonPoints: 3500, optimalTrains: 45, spPerTrain: 77.78 },
        14: { material: "Road Rollers", filter: "PLEN", units: 43300, seasonPoints: 3500, optimalTrains: 80, spPerTrain: 43.75 },
        15: { material: "Garbage Trucks", filter: "PLDN", units: 43300, seasonPoints: 3500, optimalTrains: 80, spPerTrain: 43.75 },
        16: { material: "Wrenches", filter: "PRSN", units: 22000, seasonPoints: 3500, optimalTrains: 40, spPerTrain: 87.5 }
      }
    }
  },
  
  autumn: {
    name: 'Autumn 2023',
    active: false,
    jobs: {}
  },
  
  winter: {
    name: 'Winter 2023', 
    active: false,
    jobs: {}
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

module.exports = {
  CURRENT_SEASON,
  SEASONS,
  getCurrentSeason,
  getCurrentSeasonName,
  getCurrentJobs,
  getAllSeasons,
  getSeasonInfo
};