import "../global.css";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import StackNavigator from "./navigation/StackNavigator";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <StackNavigator />  
      </NavigationContainer>
    </LanguageProvider>
  );
};

registerRootComponent(App);

export default App;
