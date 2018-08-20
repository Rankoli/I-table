import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon , Button,Text,center, Body } from 'native-base';
import {View} from 'react-native';
import Expo from "expo";
import { StatusBar, TouchableOpacity } from "react-native";
import Api from '../../server/Api';

export default class LogInPage extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#364051',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

    constructor(props) {
        super(props);
        this.state = {
          loading: true,
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

      this.setState(() => ({username:e.target.value}));
    }

    handlePasswordChange = (e) => {
  
      this.setState(() => ({password:e.target.value}));
    }

    handleSubmit = () => {
      const userName = this.state.username;
      const password = this.state.password;

      
    
     return Api.post('Login',{userName, password}).then((Response) => {
        debugger;
        const user = JSON.parse(Response.data.d);
      
      }).catch((error) => {
        console.log(error);
      })
    }

  render() {
    if (this.state.loading) {
        return <Expo.AppLoading />;//123456
      }
    return (
      <Container>
       
        <Content>
          <Item error>
            <Input placeholder='User Name' 
             onChangeText={(username) => this.setState({username})}
            value={this.state.username} />
            <Icon name='checkmark-circle' />
          </Item>

          <Item success>
            <Input placeholder='Password'
             onChangeText={(password) => this.setState({password})}
             value={this.state.password} />
            <Icon name='checkmark-circle' />
          </Item>


          <Body>

          <Item>
          <Button onPress={this.handleSubmit}>
            <Text>Login</Text>
          </Button>
          </Item>

          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SignInPage'); }}>
            <Text>
             Registration
             </Text>
          </TouchableOpacity>
          
          </Body>
          


        </Content>
      </Container>
    );
  }
}

// <Header  style={{marginTop:StatusBar.currentHeight,backgroundColor:"#364051"}} />