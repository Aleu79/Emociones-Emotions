import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BackHandler } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import LogInScreen from '../screens/auth/LogInScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/home/HomeScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPassword';
import InitScreen from '../screens/home/InitScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SocialScreen from '../screens/social/SocialScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation(); 

  useEffect(() => {
    const backAction = () => {
      const currentRoute = navigation.getCurrentRoute().name;
      if (currentRoute === 'InitScreen') {
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
    <Stack.Navigator initialRouteName="InitScreen">
      <Stack.Screen name="InitScreen" component={InitScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LogInScreen" component={LogInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SocialScreen" component={SocialScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
