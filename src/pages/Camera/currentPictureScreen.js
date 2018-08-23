import React from 'react';
import { Text, View, TouchableOpacity, Vibration, Image, Button,Alert } from 'react-native';
import { Camera, Permissions, takePictureAsync } from 'expo';
import { Footer, Right, Body, Container } from 'native-base';

export default class cuurentPictureScreen extends React.Component {
  static navigationOptions = {
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
      picUri: 'https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png',
      pic64base:"",
      picName64base:"",


    };
  }
 

  


    uploadBase64ToASMX = async() => {

     
      let urlAPI =
      'http://ruppinmobile.tempdomain.co.il/site02/WebService.asmx/ImgUpload';


      const res = await fetch(urlAPI, {
        headers: {
          'content-type': 'application/json; charset=UTF-8'
      },
      method: 'POST',
      body: JSON.stringify({
        base64img: img64base,
        base64imgName: picName,
        userID:userID,
      })
    })
    console.log(res);
    
  }




    
    // let photo2 = await this.camera.takePictureAsync();
    // //alert(photo2.uri);
    // this.setState({ picUri: photo2.uri });
    // debugger;
    // Vibration.vibrate();
 
  
 

 

  render() {
    const cuurentPicture = this.props.navigation.getParam('cuurentPicture', 'NO-ID');
    const img64base = this.props.navigation.getParam('base64image');
    const userID = this.props.navigation.getParam('userID');
    const  picName = this.props.navigation.getParam('base64imgName');


    console.log(cuurentPicture);
    
   
      return (
     <View style={{ 
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', }}>
        <Body>
        <View >
           
            <Image
              style={{ width: 300, height: 300, borderWidth: 1, borderRadius: 100}}
              source={{ uri: cuurentPicture }}
            />
            </View>
        </Body>
       

          <Footer>
            <View
              style={{
                flex: 2,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
             

              <TouchableOpacity
              style={{
                flex: 0.3,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={this.uploadBase64ToASMX}>
              <Text
                style={{ fontSize: 18, marginBottom: 10, color: 'black' }}>
                {"        "}DONE{'      '}
              </Text>
            </TouchableOpacity>

            
            <Right>
            <TouchableOpacity>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 1 }}
                source={{ uri: this.state.picUri }}
              />
              </TouchableOpacity>
              </Right>
             
            </View>
            </Footer>
        </View>
     
      
  
      );
    }
  }
