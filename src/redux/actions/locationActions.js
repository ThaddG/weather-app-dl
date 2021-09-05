import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
Geocode.setLanguage('en');
Geocode.setLocationType('ROOFTOP');
Geocode.enableDebug();

export const getLocation = () => (dispatch) => {
  try {
    navigator.geolocation.getCurrentPosition((pos) => {
      Geocode.fromLatLng(pos.coords.latitude, pos.coords.longitude).then(
        (response) => {
          const location = response.results[0];
          const payload = {
            location,
            city: location.address_components[3].long_name,
            county: location.address_components[4].long_name,
            state: location.address_components[5].long_name,
            country: location.address_components[6].long_name,
            zipcode: location.address_components[7].long_name,
          };
          dispatch({ type: 'GET_LOCATION', payload });
        }
      );
    });
  } catch (err) {
    console.error('Get Location Error:', err);
  }
};
