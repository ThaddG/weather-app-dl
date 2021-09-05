import OpenWeatherMapAPI from '../../api/openWeatherMapAPI';

const apiKey = process.env.REACT_APP_OWM_API_KEY;

export const getCurrentTemperature = (lat, lon) => (dispatch) => {
  OpenWeatherMapAPI.get(
    `/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
  )
    .then((res) => {
      const payload = {
        weather: {
          main: res.data.weather[0].main,
          description: res.data.weather[0].description,
        },
        main: {
          temp: res.data.main.temp,
        },
      };
      dispatch({ type: 'GET_CURRENT_TEMPERATURE', payload });
    })
    .catch((err) => {
      console.error('get current temp error:', err);
    });
};

export const getFiveDayTemperature = (lat, lon) => (dispatch) => {
  OpenWeatherMapAPI.get(
    `/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
  )
    .then((res) => {
      console.log('get five day temp response:', res.data);
      const payload = [
        {
          weather: {
            main: res.data.list[0].weather.main,
            description: res.data.list[0].weather.description,
          },
          main: { temp: res.data.list[0].main.temp },
        },
        {
          weather: {
            main: res.data.list[1].weather.main,
            description: res.data.list[1].weather.description,
          },
          main: { temp: res.data.list[1].main.temp },
        },
        {
          weather: {
            main: res.data.list[2].weather.main,
            description: res.data.list[2].weather.description,
          },
          main: { temp: res.data.list[2].main.temp },
        },
        {
          weather: {
            main: res.data.list[3].weather.main,
            description: res.data.list[3].weather.description,
          },
          main: { temp: res.data.list[3].main.temp },
        },
        {
          weather: {
            main: res.data.list[4].weather.main,
            description: res.data.list[4].weather.description,
          },
          main: { temp: res.data.list[4].main.temp },
        },
      ];
      dispatch({ type: 'GET_FIVE_DAY_TEMPERATURE', payload });
    })
    .catch((err) => {
      console.error('get five day temp error:', err);
    });
};
