import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon , Button,Text,Toast,Roo  } from 'native-base';
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
          username:"defult user",
          firstname:"defult fname",
          lastname:"defult lname",
          age:"25",
          telephone:"0545555555",
          password:"1111",
          email:"g@gmail.com",
          error:false
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
      const password = this.state.password;
      const email = this.state.email;
      try {
        const Response =  await Api.post('Register',{userName, fName, lName, age, telephone, password,email });
        const Uu_id = JSON.parse(Response.data.d);
        debugger;

        if(Uu_id === "User Name or Email is already exists!"){
          this.setState({error: true});
          Toast.show({
            text:Uu_id ,
            buttonText: "Okay",
            type: "danger"
          })
        }else{
          this.props.navigation.navigate('Camera',{Uu_id});
        }

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

        <Item  success = {this.state.error ? false : true} error = {this.state.error ? true : false}>
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

          <Item  success = {this.state.error ? false : true} error = {this.state.error ? true : false}>
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