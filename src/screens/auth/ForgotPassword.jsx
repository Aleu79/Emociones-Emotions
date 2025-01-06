import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { colors } from "../../utils/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("LogInScreen");
  };

  const handlePasswordReset = () => {
    console.log("Enlace de restablecimiento enviado");
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#F4F7FC]"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableOpacity
        className="h-11 w-11 bg-[#FF6F61] rounded-full justify-center items-center absolute top-20 left-5 z-10"
        onPress={handleGoBack}
      >
        <Ionicons name={"arrow-back-outline"} color={colors.primary} size={25} />
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
          paddingTop: 60, 
          alignItems: "center",
          justifyContent: "center",
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="my-5 items-center">
          <Text className="text-[#3D5A80] text-[32px] font-semibold tracking-wider">
            Forgot
          </Text>
          <Text className="text-[#3D5A80] text-[32px] font-semibold tracking-wider">
            Password
          </Text>
        </View>

        <Text className="my-2 text-center text-[16px] text-[#3D5A80] font-normal">
          Please enter your registered email address. We will send you a link to
          reset your password.
        </Text>

        <View className="mt-5 w-full md:w-1/2">
          <View className="border border-[#E1E8F1] rounded-full p-5 flex-row items-center mb-4 bg-white">
            <Ionicons name={"mail-outline"} size={24} color={colors.secondary} />
            <TextInput
              className="flex-1 pl-2 text-[#3D5A80] text-[16px] font-light"
              placeholder="Enter your email"
              placeholderTextColor={colors.secondary}
              keyboardType="email-address"
            />
          </View>

          <TouchableOpacity
            className="bg-[#FF6F61] rounded-full mt-5 py-3 shadow-lg shadow-[#FF6F61]"
            onPress={handlePasswordReset}
          >
            <Text className="text-white text-[20px] font-semibold text-center">
              Reset Password
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
