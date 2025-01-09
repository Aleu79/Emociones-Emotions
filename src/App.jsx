import "../global.css";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import StackNavigator from "./navigation/StackNavigator";
import { LanguageProvider } from "./context/LanguageContext";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <NavigationContainer>
      <LanguageProvider>
        <UserProvider>
          <StackNavigator />  
        </UserProvider>
      </LanguageProvider>
    </NavigationContainer>
  );
};

registerRootComponent(App);

export default App;
