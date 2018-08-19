import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {Container} from 'native-base';
import SignInPage from './pages/SignInPage';
import LogInPage from './pages/LogInPage';
import CameraScreen from './pages/Camera/Camera';

class App extends React.Component {
  render() {
    return (
              <Container>
              <AppNavigator />
              </Container>
            );
  }
}

const AppNavigator = createStackNavigator(
  {
    LogInPage: { screen: LogInPage },
    SignInPage: { screen: SignInPage },
    Camera:{screen:CameraScreen},

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