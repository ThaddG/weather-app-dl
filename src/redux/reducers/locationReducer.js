const initialState = {
  latitude: '',
  longitude: '',
  location: '',
  city: '',
  county: '',
  state: '',
  country: '',
  zipcode: '',
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return {
        ...state,
        location: action.payload.location,
        city: action.payload.city,
        state: action.payload.state,
      };
    default:
      return { ...state };
  }
};
