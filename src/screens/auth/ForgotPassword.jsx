import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../utils/colors";
import { useLanguage } from "../../context/LanguageContext";
import { useUser } from "../../context/UserContext";
import CustomInput from "../../components/Common/CustomInput";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const { resetPassword } = useUser();
  const { translate } = useLanguage();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoBack = () => {
    navigation.navigate("LogInScreen");
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setErrorMessage(translate("invalidEmail")); 
      return;
    }

    try {
      await resetPassword(email); 
      Alert.alert(
        translate("passwordResetSent"),
        translate("passwordResetMessage"),
        [{ text: "OK", onPress: () => navigation.navigate("LogInScreen") }]
      );
    } catch (error) {
      setErrorMessage(error.message || translate("unknownError"));
    }
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
            {translate("forgot")}
          </Text>
          <Text className="text-[#3D5A80] text-[32px] font-semibold tracking-wider">
            {translate("password")}
          </Text>
        </View>

        <Text className="my-2 text-center text-[16px] text-[#3D5A80] font-normal">
          {translate("descripciondeforgot")}
        </Text>

        <View className="mt-5 w-full md:w-1/2">


        <CustomInput
          iconNameIocons="mail-outline"
          placeholder={translate("enterEmail")}
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
          {errorMessage ? (
            <View className="w-[90%] bg-[#F8D7DA] border border-[#F5C6CB] rounded-md p-3 mb-4">
              <Text className="text-[#721C24] text-[14px] font-bold text-center">
                {errorMessage}
              </Text>
            </View>
          ) : null}
          <TouchableOpacity
            className="bg-[#FF6F61] rounded-full mt-5 py-3 shadow-lg shadow-[#FF6F61]"
            onPress={handlePasswordReset}
          >
            <Text className="text-white text-[20px] font-semibold text-center">
              {translate("resetPassword")}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
