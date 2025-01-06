import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BackHandler } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import LogInScreen from '../screens/auth/LogInScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/home/HomeScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPassword';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation(); 

  useEffect(() => {
    const backAction = () => {
      const currentRoute = navigation.getCurrentRoute().name;
      if (currentRoute === 'LogInScreen') {
        BackHandler.exitApp();
        return true; 
      }
      return false; 
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [navigation]); 

  return (
    <Stack.Navigator initialRouteName="LogInScreen">
      <Stack.Screen name="LogInScreen" component={LogInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
