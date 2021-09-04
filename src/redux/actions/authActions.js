export const signup =
  ({ email, password, firstName, lastName }) =>
  async (dispatch) => {
    // api.post('/signup')
    // .then(() => {
    dispatch({ type: 'SIGNUP' });
    // })
    // .catch(err => {
    dispatch({ type: 'AUTH_ERROR', payload: 'err.message' });
    // })
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    // api.post('/login')
    // .then(() => {
    dispatch({ type: 'LOGIN' });
    // })
    // .catch(err => {
    dispatch({ type: 'AUTH_ERROR', payload: 'err.message' });
    // })
  };

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};

export const clearAuthMessage = () => (dispatch) =>
  dispatch({ type: 'CLEAR_AUTH_MESSAGE' });
