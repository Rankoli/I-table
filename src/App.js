import Expo, {Notifications} from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {Container,Root} from 'native-base';
import SignInPage from './pages/SignInPage';
import LogInPage from './pages/LogInPage';
import CameraScreen from './pages/Camera/Camera';
import DashboardPage from './pages/DashboardPage';
import cuurentPictureScreen from './pages/Camera/currentPictureScreen';
import configureStore from './store/configureStore';
import { Provider } from "react-redux";
import registerForNotifications from './services/push_notifications';


const store = configureStore();

class App extends React.Component {
  componentDidMount() {
    registerForNotifications();

    this._notificationSubscription = Notifications.addListener((notification) => {
      debugger;
      const { data: { text },origin } = notification;
      if (origin === 'received' && text) {
        Alert.alert(
          'New Push Notification',
          text,
          [{ text: 'Ok.' }]
        )
      }
    });
  }

  render() {
    return (
              <Provider store={store}>
              <Root>
              <AppNavigator  />
              </Root>
              </Provider>
            );
  }
}

export const AppNavigator = createStackNavigator(
  {
    LogInPage: { screen: LogInPage },
    DashPage: { screen:DashboardPage},
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