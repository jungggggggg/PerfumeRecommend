// index.web.js
import 'expo-router/entry'; // Expo Router의 진입점을 가져옵니다
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});