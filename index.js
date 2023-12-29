/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';  // Adjust the path accordingly
import { name as appName } from './app.json';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

// Register foreground handler
messaging().onMessage(async remoteMessage => {
  console.log('Message handled in the foreground!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
