import OpenWeatherMapAPI from '../../api/openWeatherMapAPI';

const apiKey = process.env.REACT_APP_OWM_API_KEY;
const icon = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

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
      let payload = [];
      let oneDaySection = []; // this will hold the 8 temps for each five days
      res.data.list.forEach((item, index) => {
        let format = {
          dateTime: item.dt_txt,
          weather: {
            main: item.weather[0].main,
            description: item.weather[0].description,
            icon: icon(item.weather[0].icon)
          },
          main: { temp: item.main.temp },
        };

        // section off the array items to 5 arrays of 8 items
        if ((index+1) % 8 === 0) {
          payload.push(oneDaySection);
          oneDaySection = [];
          oneDaySection.push(format);
        }
        else oneDaySection.push(format);
      });
      dispatch({ type: 'GET_FIVE_DAY_TEMPERATURE', payload });
    })
    .catch((err) => {
      console.error('get five day temp error:', err);
    });
};
