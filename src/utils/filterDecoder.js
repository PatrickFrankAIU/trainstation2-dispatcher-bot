// TrainStation 2 Filter Code Decoder
// Converts 4-letter filter codes into human-readable explanations

const FILTER_MAPPINGS = {
  // Position 1: Region
  region: {
    'C': 'Current',
    'P': 'Prior'
  },
  
  // Position 2: Rarity  
  rarity: {
    'L': 'Legendary',
    'E': 'Epic', 
    'R': 'Rare',
    'C': 'Common',
    'A': 'Any'
  },
  
  // Position 3: Fuel
  fuel: {
    'S': 'Steam',
    'D': 'Diesel',
    'E': 'Electric', 
    'A': 'Any'
  },
  
  // Position 4: Union-badged
  union: {
    'Y': 'Yes',
    'N': 'No'
  }
};

// Decode a 4-letter filter code into readable explanation
function decodeFilter(filterCode) {
  if (!filterCode || filterCode.length !== 4) {
    return 'Invalid filter code';
  }
  
  let code = filterCode.toUpperCase();
  let region = FILTER_MAPPINGS.region[code[0]] || 'Unknown';
  let rarity = FILTER_MAPPINGS.rarity[code[1]] || 'Unknown';
  let fuel = FILTER_MAPPINGS.fuel[code[2]] || 'Unknown';
  let union = FILTER_MAPPINGS.union[code[3]] || 'Unknown';
  
  return `${region} region, ${rarity} rarity, ${fuel} fuel, Union: ${union}`;
}

// Get a short version for embeds
function decodeFilterShort(filterCode) {
  if (!filterCode || filterCode.length !== 4) {
    return 'Invalid';
  }
  
  let code = filterCode.toUpperCase();
  let region = FILTER_MAPPINGS.region[code[0]] || '?';
  let rarity = FILTER_MAPPINGS.rarity[code[1]] || '?';
  let fuel = FILTER_MAPPINGS.fuel[code[2]] || '?';
  let union = FILTER_MAPPINGS.union[code[3]] || '?';
  
  return `${region}/${rarity}/${fuel}/Union:${union}`;
}

// Get individual components
function getFilterComponents(filterCode) {
  if (!filterCode || filterCode.length !== 4) {
    return null;
  }
  
  let code = filterCode.toUpperCase();
  return {
    region: FILTER_MAPPINGS.region[code[0]] || 'Unknown',
    rarity: FILTER_MAPPINGS.rarity[code[1]] || 'Unknown', 
    fuel: FILTER_MAPPINGS.fuel[code[2]] || 'Unknown',
    union: FILTER_MAPPINGS.union[code[3]] || 'Unknown',
    raw: code
  };
}

module.exports = {
  decodeFilter,
  decodeFilterShort,
  getFilterComponents,
  FILTER_MAPPINGS
};