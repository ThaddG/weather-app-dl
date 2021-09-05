const initialState = {
  latitude: '',
  longitude: '',
  address: '',
  city: '',
  county: '',
  state: '',
  country: '',
  zipcode: '',
};

export const temperatureReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TEMPERATURE':
      return {
        ...state,
        address: action.payload.location.formatted_address,
        city: action.payload.city,
        state: action.payload.state,
        zipcode: action.payload.zipcode,
      };
    default:
      return { ...state };
  }
};
