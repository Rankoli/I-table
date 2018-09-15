import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import Api from '../../server/Api';


export default async () => {
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    console.log(finalStatus);

    return (
        // token,
         fetch('http://ruppinmobile.tempdomain.co.il/site02/WebService.asmx/SendPushNotification'
             , {
            method: 'POST',
             headers: {
              Accept: 'application/json',
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                 token: {
                     value: token,
                 },
                 user: {
                     username: 'Brent',
                 },
             }),
          })
     );
  

    }
