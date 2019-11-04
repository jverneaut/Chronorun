const SELECT_RACE = 'SELECT_RACE';
const SET_IS_CUSTOM_RACE = 'SET_IS_CUSTOM_RACE';

const races = [
  { name: '500 m', distance: 500 },
  { name: '1000 m', distance: 1000 },
  { name: '1500 m', distance: 1500 },
  { name: '5 km', distance: 5000 },
  { name: '10 km', distance: 10000 },
  { name: 'Semi-marathon', distance: 21000 },
  { name: 'Marathon', distance: 42195 },
].map(race => ({
  ...race,
  distanceText:
    race.distance.toString().length > 3 ? race.distance / 1000 + ' km' : race.distance + ' m',
}));

const initialState = {
  races,
  selectedRaceIndex: -1,
  isCustomRace: false,
};

export default reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_RACE:
      return {
        ...state,
        selectedRaceIndex: action.payload,
      };
    case SET_IS_CUSTOM_RACE:
      return {
        ...state,
        isCustomRace: action.payload,
      };
    default:
      return state;
  }
};

export const selectRace = index => ({
  type: SELECT_RACE,
  payload: index,
});

export const setIsCustomRace = bool => ({
  type: SET_IS_CUSTOM_RACE,
  payload: bool,
});
