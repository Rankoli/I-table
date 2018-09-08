import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Text,
  center,
  Body
} from 'native-base';
import {View} from 'react-native';
import Expo from "expo";
import {StatusBar, TouchableOpacity, Image} from "react-native";

import {startLogin} from '../actions/auth'

class LogInPage extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#364051'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      username: "",
      password: "",
      picUri: 'https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gen' +
          'der-male2-512.png'
    };
  }

  async componentWillMount() {
    await Expo
      .Font
      .loadAsync({'Roboto': require('native-base/Fonts/Roboto.ttf'), 'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'), 'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf')});
    this.setState({loading: false});
  }

  handleUserNameTextChanged = (e) => {

    this.setState(() => ({username: e.target.value}));
  }

  handlePasswordChange = (e) => {

    this.setState(() => ({password: e.target.value}));
  }

  handleSubmit = () => {

    //start login
    this
      .props
      .startLogin(this.state.username, this.state.password)

  };

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading/>; //123456
    }
    return (
      <Container>

        <Content>
          <Item error>
            <Input
              placeholder='User Name'
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}/>
            <Icon name='checkmark-circle'/>
          </Item>

          <Item success>
            <Input
              placeholder='Password'
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}/>
            <Icon name='checkmark-circle'/>
          </Item>

          <Body>

            <Item>
              <Button onPress={this.handleSubmit}>
                <Text>Login</Text>
              </Button>
            </Item>

            <TouchableOpacity
              style={{
              marginTop: 20,
              marginBottom: 10
            }}
              onPress={() => {
              this
                .props
                .navigation
                .navigate('SignInPage');
            }}>
              <Text>
                Registration
              </Text>
            </TouchableOpacity>

          </Body>

          <Image
            style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            borderWidth: 1
          }}
            source={{
            uri: this.state.picUri
          }}/>

        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: (userName, password) => dispatch(startLogin(userName, password)),
  logout: () => dispatch(logout())
});

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.msg,
  errorMassege: state.auth.msg
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);

// <Header
// style={{marginTop:StatusBar.currentHeight,backgroundColor:"#364051"}} />