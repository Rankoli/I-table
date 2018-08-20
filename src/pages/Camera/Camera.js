import React from 'react';
import { Text, View, TouchableOpacity, Vibration, Image, Button } from 'react-native';
import { Camera, Permissions, takePictureAsync } from 'expo';

export default class CameraScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      picUri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
    };
  }
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  btnPic = async () => {
    
    let photo2 = await this.camera.takePictureAsync();
    //alert(photo2.uri);
    this.setState({ picUri: photo2.uri });
    debugger;
    Vibration.vibrate();
  } 

  render() {
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
