const initialState = {
  current: {
    weather: {
      main: '',
      description: '',
    },
    main: {
      temp: 0,
    },
  },
  fiveDay: [],
};

export const temperatureReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CURRENT_TEMPERATURE':
      return {
        ...state,
        current: { ...action.payload },
      };
    case 'GET_FIVE_DAY_TEMPERATURE':
      return { ...state, fiveDay: action.payload };
    default:
      return { ...state };
  }
};
