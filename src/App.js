import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {Container,Root} from 'native-base';
import SignInPage from './pages/SignInPage';
import LogInPage from './pages/LogInPage';
import CameraScreen from './pages/Camera/Camera';
import cuurentPictureScreen from './pages/Camera/currentPictureScreen';
import configureStore from './store/configureStore';
import { Provider } from "react-redux";


const store = configureStore();

class App extends React.Component {

  render() {
    return (
              <Provider store={store}>
              <AppNavigator />
              </Provider>
            );
  }
}

export const AppNavigator = createStackNavigator(
  {
    LogInPage: { screen: LogInPage },
    SignInPage: { screen: SignInPage },
    Camera:{screen:CameraScreen},
    Picture:{screen:cuurentPictureScreen}

  },
  {
    initialRouteName: 'LogInPage',
  }
);



// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

Expo.registerRootComponent(App);