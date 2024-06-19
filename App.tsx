import React, { useEffect } from 'react';
import {

  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import {store} from "./store/store"
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import HomeApp from './screens/HomeApp';
import QuizPage from './screens/QuizPage';
import ResultPage from './screens/ResultPage';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 32,
    paddingHorizontal: 16,
  },
});

export default App;
