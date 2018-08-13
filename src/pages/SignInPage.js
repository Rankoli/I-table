import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon , Button } from 'native-base';
import {View} from 'react-native';
import Expo from "expo";
import { StatusBar } from "react-native";
import Api from '../../server/Api';

export default class SignInPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: true
          username:"",
          password:""
         };
      }

    async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });
        this.setState({ loading: false });
    }

    handleUserNameTextChanged = (e) => {
      this.setState({username: e.target.value });
    }

    handlePasswordChange = (e) => {
      this.setState({password: e.target.value});
    }

    handleSubmit = () => {
      Api.post("Login",{this.username,this.password}).then((Response) => {
        const user = JSON.parse(Response.data.d);
      }).catch((error) = > {
        console.log(error);
      })
    }

  render() {
    if (this.state.loading) {
        return <Expo.AppLoading />;//123456
      }
    return (
      <Container>
        <Header  style={{marginTop:StatusBar.currentHeight,backgroundColor:"#364051"}} />
        <Content>
          <Item error>
            <Input placeholder='First Name' onChange={this.handleUserNameTextChanged} />
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
            <Input placeholder='Password' onChange={this.handlePasswordChange}/>
            <Icon name='checkmark-circle' />
          </Item>

          <Item success>
            <Input placeholder='Confirm Password'/>
            <Icon name='checkmark-circle' />
          </Item>

          <Item>
          <Button onPress={this.handleSubmit}>
            <Text>Login</Text>
          </Button>
          </Item>


        </Content>
      </Container>
    );
  }
}