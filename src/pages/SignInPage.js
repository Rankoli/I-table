import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon , Button,Text } from 'native-base';
import {View,TouchableOpacity} from 'react-native';
import Expo from "expo";
import { StatusBar } from "react-native";
import Api from '../../server/Api';

export default class SignInPage extends Component {

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


    handleSubmit = () => {
      const userName = this.state.username;
      const Fname=this.state.firstname;
      const Lname = this.state.lastname;
      const Age = this.state.age;
      const Telephone = this.state.telephone;
      const Picture = this.state.picture;
      const Password = this.state.password;

      
      debugger;
     return Api.post('InsertUser',{userName, Fname, Lname, Age, Telephone, Picture, Password}).then((Response) => {
      
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
        <Header  style={{marginTop:StatusBar.currentHeight,backgroundColor:"#364051"}} />
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

          <Item>
          <Button onPress={this.handleSubmit}>
            <Text>Sign In</Text>
          </Button>
          </Item>


        </Content>
      </Container>
    );
  }
}