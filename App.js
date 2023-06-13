import * as React from 'react';
import Main from './screens/main';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';

const Stack = createStackNavigator()

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator intialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="home" component={Home}></Stack.Screen>
          <Stack.Screen name="main" component={Main}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}