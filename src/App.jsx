import "../global.css";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import StackNavigator from "./navigation/StackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />  
    </NavigationContainer>
  );
};

registerRootComponent(App);

export default App;
