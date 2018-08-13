import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container} from 'native-base';
import SignInPage from './pages/SignInPage';

class App extends React.Component {
  render() {
    return (
              <Container>
              <SignInPage />
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