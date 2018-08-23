import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon , Button,Text } from 'native-base';
import {View,TouchableOpacity} from 'react-native';
import Expo from "expo";
import { StatusBar } from "react-native";
import Api from '../../server/Api';

 export default class SignInPage extends Component {
  static navigationOptions = {
    title: 'Signin',
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
          firstname:"",
          lastname:"",
          age:"",
          telephone:"",
          picture:"",
          password:"",
          email:""
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


    handleSubmit = async() => {
      const userName = this.state.username;
      const fName=this.state.firstname;
      const lName = this.state.lastname;
      const age = this.state.age;
      const telephone = this.state.telephone;
      const picture = this.state.picture;
      const password = this.state.password;
      const email = this.state.email;
debugger;
      try {
        const Response =  await Api.post('Register',{userName, fName, lName, age, telephone, picture, password,email });
        const Uu_id = JSON.parse(Response.data.d);

       this.props.navigation.navigate('Camera',{Uu_id});
      } catch (error) {
        console.log(error);
        
      }
    
      
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

          <Item error>
            <Input placeholder='First Name' 
             onChangeText={(firstname) => this.setState({firstname})}
            value={this.state.firstname} />
            <Icon name='checkmark-circle' />
          </Item>

          <Item success>
            <Input placeholder='LastName'
            onChangeText={(lastname) => this.setState({lastname})}
            value={this.state.lastname}/>
            <Icon name='checkmark-circle' />
          </Item>

          <Item success>
            <Input placeholder='Age'
            onChangeText={(age) => this.setState({age})}
            value={this.state.age}/>
            <Icon name='checkmark-circle' />
          </Item>

          <Item error>
            <Input placeholder='Telephone' 
             onChangeText={(telephone) => this.setState({telephone})}
            value={this.state.telephone} />
            <Icon name='checkmark-circle' />
          </Item>

          <Item error>
            <Input placeholder='Picture' 
             onChangeText={(picture) => this.setState({picture})}
            value={this.state.picture} />
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Camera');
            }}><Icon name='camera' /></TouchableOpacity>
          </Item>

          <Item success>
            <Input placeholder='Password'
             onChangeText={(password) => this.setState({password})}
             value={this.state.password} />
            <Icon name='checkmark-circle' />
          </Item>

          <Item success>
            <Input placeholder='Confirm Password'/>
            <Icon name='checkmark-circle' />
          </Item>

          <Item success>
          <Input placeholder='Email'
           onChangeText={(email) => this.setState({email})}
           value={this.state.email} />
          <Icon name='checkmark-circle' />
        </Item>


          <Item>
          <Button onPress={this.handleSubmit}>
            <Text>NEXT</Text>
          </Button>
          </Item>


        </Content>
      </Container>
    );
  }
}

// <Header  style={{marginTop:StatusBar.currentHeight,backgroundColor:"#364051"}} />