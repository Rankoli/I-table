import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Container, Header, Content, Item, Input, Icon , Button,Text,Toast,Roo  } from 'native-base';
import {View,TouchableOpacity} from 'react-native';
import Expo from "expo";
import { StatusBar } from "react-native";
// import Api from '../../server/Api';
import {startSignIn} from '../actions/auth';
import validator from 'validator';

  class SignInPage extends Component {

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
          age:"0",
          telephone:"0545555555",
          password:"1111",
          confirmPass:'',
          email:"gooojkjj@gmail.com",
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
      const fName = this.state.firstname;
      const lName = this.state.lastname;
      const age = this.state.age;
      const telephone = this.state.telephone;
      const password = this.state.password;
      const email = this.state.email;



      if(validator.isEmail(email) && !validator.isEmpty(userName)){
        try {
            await this.props.startSignIn(userName,fName,lName,age,telephone,password,email);
          const Uu_id = this.props.Uu_id;
         debugger;
           if(!this.props.isRegister){
             this.setState({error: true});
             Toast.show({
               text: this.props.errorMassege,
               buttonText: "Okay",
               type: "danger"
             })
           }else{
           this.props.navigation.navigate('Camera',{Uu_id});
           }

         } catch (error) {
           console.log(error);

         }
      }else {
        //  Toast.show({
        //    text: 'valid mail is require and user name!',
        //    buttonText: "Okay",
        //    type: "danger"
        //  })
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
            <Icon name={this.state.error ?  'close-circle' : 'checkmark-circle' } />
          </Item>

          <Item success>
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

          <Item success >
            <Input placeholder='Age'
            onChangeText={(age) => this.setState({age})}
            value={this.state.age.toString()}/>
            <Icon name='checkmark-circle' />
          </Item>

          <Item success>
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
            <Input placeholder='Confirm Password'
            onChangeText={(confirmPass) => this.setState({confirmPass})}
            value={this.state.confirmPass}
            />
            <Icon name='checkmark-circle' />
          </Item>

          <Item  success = {this.state.error ? false : true} error = {this.state.error ? true : false}>
          <Input placeholder='Email'
           onChangeText={(email) => this.setState({email})}
           value={this.state.email} />

          <Icon name={this.state.error ?  'close-circle' : 'checkmark-circle' } />
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


const mapDispatchToProps = (dispatch) => ({
  startSignIn: (userName, fName, lName, age, telephone, password,email) => dispatch(startSignIn(userName, fName, lName, age, telephone, password,email))
});

const mapStateToProps = (state) => ({
  isRegister: !!state.auth.Uu_id,
  errorMassege: state.auth.msg,
  Uu_id: state.auth.Uu_id
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
// <Header  style={{marginTop:StatusBar.currentHeight,backgroundColor:"#364051"}} />



// <Item  success = {this.state.error ? false : true} error = {this.state.error ? true : false}>
//             <Input placeholder='User Name'
//              onChangeText={(username) => this.setState({username})}
//             value={this.state.username} />
//             <Icon name='checkmark-circle' />
//           </Item>

//           <Item success = {this.state.firstname.length > 2 ? true : false} error = {this.state.firstname.length <= 2 ? true : false}>
//             <Input placeholder='First Name'
//              onChangeText={(firstname) => this.setState({firstname})}
//               value={this.state.firstname} />
//             <Icon name='checkmark-circle' />
//           </Item>

//           <Item success = {this.state.firstname.length > 2 ? true : false} error = {this.state.firstname.length <= 2 ? true : false}>
//             <Input placeholder='LastName'
//             onChangeText={(lastname) => this.setState({lastname})}
//             value={this.state.lastname}/>
//             <Icon name='checkmark-circle' />
//           </Item>

//           <Item success = {this.state.age > 18 ? true : false} error = {this.state.firstname.length < 18 ? true : false}>
//             <Input placeholder='Age'
//             onChangeText={(age) => this.setState({age})}
//             value={this.state.age.toString()}/>
//             <Icon name='checkmark-circle' />
//           </Item>

//           <Item success = {this.state.telephone.length === 10 ? true : false} error = {this.state.firstname.length <= 9 ? true : false}>
//             <Input placeholder='Telephone'
//              onChangeText={(telephone) => this.setState({telephone})}
//             value={this.state.telephone} />
//             <Icon name='checkmark-circle' />
//           </Item>



//           <Item success = {this.state.password.match(/(?=.*\d)(?=.*\W+)(?=.*[a-z])(?=.*[A-Z]).{7,12}/)} error = {this.state.password.match(/(?=.*\d)(?=.*\W+)(?=.*[a-z])(?=.*[A-Z]).{7,12}/)}>
//             <Input placeholder='Password'
//              onChangeText={(password) => this.setState({password})}
//              value={this.state.password} />
//             <Icon name='checkmark-circle' />
//           </Item>

//           <Item success = {validator.equals(this.state.confirmPass,this.state.password)} error = {validator.equals(this.state.confirmPass,this.state.password)}>
//             <Input placeholder='Confirm Password'
//             onChangeText={(confirmPass) => this.setState({confirmPass})}
//             value={this.state.confirmPass}
//             />
//             <Icon name='checkmark-circle' />
//           </Item>

//           <Item  success = {this.state.error ? false : true} error = {this.state.error ? true : false}>
//           <Input placeholder='Email'
//            onChangeText={(email) => this.setState({email})}
//            value={this.state.email} />

//           <Icon name={this.state.error ?  'close-circle' : 'checkmark-circle' } />
//         </Item>
