import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container} from 'native-base';
import SignInPage from './pages/SignInPage';
import LogInPage from './pages/LogInPage';

class App extends React.Component {
  render() {
    return (
              <Container>
              <LogInPage />
              </Container>
            );
  }
}



// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

Expo.registerRootComponent(App);