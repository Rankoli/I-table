import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});


// {
//   "name": "i-table-crna",
//   "version": "0.1.0",
//   "private": true,
//   "devDependencies": {
//     "react-native-scripts": "1.14.0",
//     "jest-expo": "~27.0.0",
//     "react-test-renderer": "16.3.1"
//   },
//   "main": "src/App.js",
//   "scripts": {
//     "start": "react-native-scripts start",
//     "eject": "react-native-scripts eject",
//     "android": "react-native-scripts android",
//     "ios": "react-native-scripts ios",
//     "test": "jest"
//   },
//   "jest": {
//     "preset": "jest-expo"
//   },
//   "dependencies": {
//     "@expo/vector-icons": "^6.3.1",
//     "expo": "^27.0.1",
//     "native-base": "^2.7.2",
//     "react": "16.3.1",
//     "react-native": "~0.55.2"
//   }
// }
