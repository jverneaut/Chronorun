const SELECT_RACE = 'SELECT_RACE';

const races = [
  { name: '500 m', distance: 500 },
  { name: '1000 m', distance: 1000 },
  { name: '1500 m', distance: 1500 },
  { name: '5 km', distance: 5000 },
  { name: '10 km', distance: 10000 },
  { name: 'Semi-marathon', distance: 21000 },
  { name: 'Marathon', distance: 42195 },
];

const initialState = {
  races,
  selectedRaceIndex: -1,
};

export default reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_RACE:
      return {
        ...state,
        selectedRaceIndex: action.payload,
      };
    default:
      return state;
  }
};

export const selectRace = index => {
  return {
    type: SELECT_RACE,
    payload: index,
  };
};
