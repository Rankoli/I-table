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


<<<<<<< HEAD
    handleSubmit = () => {
<<<<<<< HEAD
      Api.post("Login",{this.state.username,this.state.password}).then((Response) => {
=======
=======
    handleSubmit = async() => {
>>>>>>> c8c6291ed022038a8324b35754abc45a0c5fcc5a
      const userName = this.state.username;
<<<<<<< HEAD
      const Fname=this.state.firstname;
      const Lname = this.state.lastname;
      const Age = this.state.age;
      const Telephone = this.state.telephone;
      const Picture = this.state.picture;
      const Password = this.state.password;

<<<<<<< HEAD
      
      debugger;
     return Api.post('InsertUser',{userName, Fname, Lname, Age, Telephone, Picture, Password}).then((Response) => {
      
>>>>>>> 87dca35db6b8b4554f6fe5e6eb0066c8f97a8015
        const user = JSON.parse(Response.data.d);
      
      }).catch((error) => {
=======
=======
      const fName=this.state.firstname;
      const lName = this.state.lastname;
      const age = this.state.age;
      const telephone = this.state.telephone;
      const picture = this.state.picture;
      const password = this.state.password;
      const email = this.state.email;
debugger;
>>>>>>> d67c2e6617050af4d55b430bd4a14d246119fe09
      try {
        const Response =  await Api.post('Register',{userName, fName, lName, age, telephone, picture, password,email });
        const Uu_id = JSON.parse(Response.data.d);

       this.props.navigation.navigate('Camera',{Uu_id});
      } catch (error) {
>>>>>>> c8c6291ed022038a8324b35754abc45a0c5fcc5a
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
<<<<<<< HEAD
            <Input placeholder='First Name' onChangeText={this.handleUserNameTextChanged} />
=======
            <Input placeholder='First Name' 
             onChangeText={(firstname) => this.setState({firstname})}
            value={this.state.firstname} />
>>>>>>> 87dca35db6b8b4554f6fe5e6eb0066c8f97a8015
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
<<<<<<< HEAD
            <Input placeholder='Password' onChangeText={this.handlePasswordChange}/>
=======
            <Input placeholder='Password'
             onChangeText={(password) => this.setState({password})}
             value={this.state.password} />
>>>>>>> 87dca35db6b8b4554f6fe5e6eb0066c8f97a8015
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