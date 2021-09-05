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

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
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
