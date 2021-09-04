# React Web Template

Template created using "yarn create react-app <name>".

## Differences from this template to the default create react app:
  - Redux (and thunk) added and store already integrated into index.js
  - Auth reducer example added
  - Auth actions added with simple formats to follow
  - webvitals file removed and reference removed in index.js
  - Depenedencies and DevDependencies organized; testing and types are in the DevDependencies section
  - Components folder added with Guarded Route component added for guarding routes
  - Guarded Route example given in App.jsx

## Using Redux in a component
  Add these imports in the component
  > import {useSelector, useDispatch} from 'react-redux';
  ### declaring a reducer
  > const reducerName = useSelector(state => state.reducerName);
  ### declaring the dispatch
  > const dispatch = useDispatch();
  ### calling an action (I'll use "signout()" as example)
  > dispatch(signout())

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
