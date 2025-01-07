import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from "@react-navigation/native";

const LogInScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleLogin = () => {
    navigation.navigate("RegisterScreen");
  };
  const handleLoginexitoso = () => {
    navigation.navigate("HomeScreen");
  };
  const handleGoBack = () => {
    navigation.navigate("InitScreen");
  };
  const ForgotPasswordScreen = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-100"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
       contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
      }}
      keyboardShouldPersistTaps="handled"
      className="px-5 pb-8"
      >
        <TouchableOpacity
          className="h-10 w-10 bg-primary rounded-full justify-center items-center"
          onPress={handleGoBack}
        >
          <Ionicons name="arrow-back-outline" size={25} color="white" />
        </TouchableOpacity>
        <View className="my-6 items-center">
          <Text className="text-3xl font-semibold text-primary">Hey, Welcome</Text>
          <Text className="text-3xl font-semibold text-primary">Back</Text>
        </View>
        <View className="mt-4 w-full">
          <View className="flex-row items-center border border-gray-300 bg-white rounded-full px-5 py-3 mb-4">
            <Ionicons name="mail-outline" size={24} color="#6B7280" />
            <TextInput
              className="flex-1 ml-3 text-base text-gray-800"
              placeholder="Enter your email"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
            />
          </View>
          <View className="flex-row items-center border border-gray-300 bg-white rounded-full px-5 py-3 mb-4">
            <SimpleLineIcons name="lock" size={24} color="#6B7280" />
            <TextInput
              className="flex-1 ml-3 text-base text-gray-800"
              placeholder="Enter your password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={secureEntry}
            />
            <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
              <SimpleLineIcons name="eye" size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={ForgotPasswordScreen}>
            <Text className="text-sm text-center text-primary italic">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-primary rounded-full mt-5 py-3 shadow-lg"
            onPress={handleLoginexitoso}
          >
            <Text className="text-center text-white text-lg font-semibold uppercase">Login</Text>
          </TouchableOpacity>
          <Text className="text-sm text-center text-gray-600 italic my-5">or continue with</Text>
          <TouchableOpacity className="flex-row items-center justify-center border-2 border-primary rounded-full py-3 bg-white shadow-sm">
            <Ionicons name="logo-google" size={24} color="#FF6F61" />
            <Text className="ml-2 text-primary font-medium">Google</Text>
          </TouchableOpacity>
          <View className="flex-row justify-center items-center mt-6">
            <Text className="text-gray-600">Don’t have an account?</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text className="text-primary font-bold text-base ml-1 underline">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LogInScreen;
