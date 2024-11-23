
export const test_data_set_1 = {
    "start": { "x": 10, "y": 10 },
    "commands": [
      { "direction": "east", "steps": 3 },
      { "direction": "north", "steps": 3 },
      { "direction": "west", "steps": 3 },
      { "direction": "north", "steps": 3 },
      { "direction": "east", "steps": 3 }
    ]
  }

export const test_data_set_1_result = 16;

export const test_data_set_2 = {
    "start": { "x": 10, "y": 22 },
    "commands": [
      { "direction": "east", "steps": 2 },
      { "direction": "north", "steps": 1 }
    ]
  }
  
export const test_data_set_2_result = 4;

export const test_data_set_3 = {
    "start": { "x": 5, "y": 5 },
    "commands": [
      { "direction": "north", "steps": 3 },
      { "direction": "south", "steps": 2 }
    ]
  }  

export const test_data_set_3_result = 4;

export const test_data_set_4 = {
    "start": { "x": 0, "y": 0 },
    "commands": [
      { "direction": "east", "steps": 100 },
      { "direction": "north", "steps": 100 }
    ]
  }
  
export const test_data_set_4_result = 201;

export const test_data_set_5 = {
    "start": { "x": 100000, "y": -100000 },
    "commands": [
      { "direction": "west", "steps": 1 },
      { "direction": "south", "steps": 1 }
    ]
  }

export const test_data_set_5_result = 3;

export const test_data_set_6 = {
    "start": { "x": 10, "y": 10 },
    "commands": [
      { "direction": "north", "steps": 0 }
    ]
  }

export const test_data_set_6_result = 1;

export const test_data_set_7 = {
    "start": { "x": 0, "y": 0 },
    "commands": [
      { "direction": "east", "steps": 9999 }
    ]
  }

export const test_data_set_7_result = 10000;

export const test_data_set_8 = {
    "start": { "x": 0, "y": 0 },
    "commands": [
      { "direction": "north", "steps": 5 },
      { "direction": "east", "steps": 5 },
      { "direction": "south", "steps": 5 },
      { "direction": "west", "steps": 5 }
    ]
  }

export const test_data_set_8_result = 20;