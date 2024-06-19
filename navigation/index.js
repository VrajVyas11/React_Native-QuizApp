import { createStackNavigator } from '@react-navigation/stack';
import HomeApp from '../screens/HomeApp';
import QuizPage from '../screens/QuizPage';
import ResultPage from '../screens/ResultPage';
import React from 'react';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeApp} options={{headerShown:false}} />
      <Stack.Screen name="Quiz" component={QuizPage} options={{headerShown:false}}/>
      <Stack.Screen name="Result" component={ResultPage} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default MyStack