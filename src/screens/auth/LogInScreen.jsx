import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../components/Loading/Loading";
import CustomInput from "../../components/Common/CustomInput";
import { useLanguage } from "../../context/LanguageContext";
import { useUser } from "../../context/UserContext";

const LogInScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { translate } = useLanguage();
  const { loginUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleBack = () => {
    navigation.navigate("RegisterScreen");
  };

  const handleLogin = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      await loginUser(email, password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };

  const handleGoBack = () => {
    navigation.navigate("InitScreen");
  };

  const ForgotPasswordScreen = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        className="px-5"
      >
        <TouchableOpacity
          className="h-10 w-10 items-center justify-center mt-12 ml-5"
          onPress={handleGoBack}
        >
          <Ionicons name="chevron-back-outline" color="#000" size={20} />
        </TouchableOpacity>

        <View className="mt-10 mb-4 w-full">
          <Text className="text-4xl font-bold text-black mb-2 ml-5">
            {translate("heywelcome")}
          </Text>
          <Text className="text-4xl font-bold text-black mb-2 ml-5">
            {translate("heywelcomeback")}
          </Text>
        </View>

        <View className="mb-5">
          <CustomInput
            iconNameSimple="user"
            placeholder={translate("enterusername")}
            value={email}
            onChangeText={setEmail}
          />
          <CustomInput
            iconNameIocons="lock-closed-outline"
            placeholder={translate("enterPassword")}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            onPressEye={() => console.log("Eye pressed")}
          />

          {errorMessage ? (
            <View className="w-[90%] bg-[#F8D7DA] border border-[#F5C6CB] rounded-lg p-3 mb-4 mt-2 mx-auto">
              <Text className="text-[#721C24] text-sm font-bold text-center">
                {errorMessage}
              </Text>
            </View>
          ) : null}

          <View className="my-5 items-center">
            <TouchableOpacity onPress={ForgotPasswordScreen}>
              <Text className="text-[#FF6F61]">{translate("forgotPassword")}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="bg-[#FF6F61] rounded-full py-4 w-[90%] items-center mx-auto shadow-md"
            onPress={handleLogin}
          >
            <Text className="text-white text-lg font-bold uppercase">
              {translate("login")}
            </Text>
            {loading && <View className="absolute right-3 top-2"><Loading /></View>}
          </TouchableOpacity>

          <Text className="text-center my-5 text-gray-500">
            {translate("orcontinue")}
          </Text>

          <View className="flex-row justify-center">
            <TouchableOpacity className="flex-row items-center justify-center border-2 border-[#FF6F61] rounded-full p-3 mx-2">
              <Ionicons name="logo-google" size={25} color="#FF6F61" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-center border-2 border-[#FF6F61] rounded-full p-3 mx-2">
              <Ionicons name="logo-github" size={25} color="#FF6F61" />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center mt-5">
            <Text className="text-gray-500 text-base">{translate("haveaccount")}</Text>
            <TouchableOpacity onPress={handleBack} className="ml-2">
              <Text className="text-[#FF6F61] text-base font-bold underline">
                {translate("signup")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LogInScreen;
