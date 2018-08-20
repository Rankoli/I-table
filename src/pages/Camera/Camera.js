import React from 'react';
import { Text, View, TouchableOpacity, Vibration, Image, Button,Alert } from 'react-native';
import { Camera, Permissions, takePictureAsync } from 'expo';

export default class CameraScreen extends React.Component {
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
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      picUri: 'https://www.google.co.il/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj30f_b6vvcAhVGyqQKHV1tAAIQjRx6BAgBEAU&url=http%3A%2F%2Fwww.stickpng.com%2Fimg%2Ficons-logos-emojis%2Fusers%2Fcircled-user-icon&psig=AOvVaw2DHPZbY-U1GJs__hVt3GbG&ust=1534861454754176',
      pic64base:"",
      picName64base:"",


    };
  }
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  btnPic = async () => {

    let photo = await this.camera.takePictureAsync({
      quality: 0.1,
      base64: true,
      });
      this.setState({
      pic64base: photo.base64,
      picName64base: 'image1_' + new Date().getTime() + '.jpg',
      picUri: `data:image/jpg;base64,${photo.base64}`,
      });
    }


    uploadBase64ToASMX = async() => {

      this.setState({ animate: true });
      let urlAPI =
      'http://ruppinmobile.tempdomain.co.il/site02/WebService.asmx/ImgUpload';


      const res = await fetch(urlAPI, {
        headers: {
          'content-type': 'application/json; charset=UTF-8'
      },
      method: 'POST',
      body: JSON.stringify({
        base64img: this.state.pic64base,
        base64imgName: this.state.picName64base,
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
    const itemId = this.props.navigation.getParam('Uu_id', 'NO-ID');
    console.log(itemId);
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera ref={ref => {
            this.camera = ref;
          }} style={{ flex: 1 }} type={this.state.type} >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.2,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 0.2,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={this.btnPic}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {"      "}Pic{'    '}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
              style={{
                flex: 0.3,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={this.uploadBase64ToASMX}>
              <Text
                style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                {"        "}UPLOAD{'      '}
              </Text>
            </TouchableOpacity>

              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: this.state.picUri }}
              />
            </View>
         
          <View style={{
            flex: 1, padding: 50,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <Text style={{ fontSize: 20 }}>Reload at {new Date().toLocaleTimeString()}</Text>
            <Button
              onPress={this.btnPic}
              title="btn Pic From OutSide"
              style={{width:200 }}
            />
            <Image
              style={{ width: 200, height: 250 }}
              source={{ uri: this.state.picUri }}
            />
          </View>
          </Camera>
        </View>
      );
    }
  }
}