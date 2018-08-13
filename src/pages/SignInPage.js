import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import {View} from 'react-native';
import Expo from "expo";
import { StatusBar } from "react-native";

export default class SignInPage extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: true };
      }

    async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });
        this.setState({ loading: false });
    }

  render() {
    if (this.state.loading) {
        return <Expo.AppLoading />;
      }
    return (
      <Container>
        <Header  style={{marginTop:StatusBar.currentHeight,backgroundColor:"#364051"}} />
        <Content>
          <Item error>
            <Input placeholder='First Name'/>
            <Icon name='checkmark-circle' />
          </Item>

          <Item success>
            <Input placeholder='LastName'/>
            <Icon name='checkmark-circle' />
          </Item>

          <Item success>
            <Input placeholder='Email'/>
            <Icon name='checkmark-circle' />
          </Item>

          <Item success>
            <Input placeholder='Password'/>
            <Icon name='checkmark-circle' />
          </Item>

          <Item success>
            <Input placeholder='Confirm Password'/>
            <Icon name='checkmark-circle' />
          </Item>

        </Content>
      </Container>
    );
  }
}