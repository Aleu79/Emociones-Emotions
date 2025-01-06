import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";  
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleGoBack = () => {
    navigation.navigate("LogInScreen");
  };
  const handleLoginexitoso = () => {
    navigation.navigate("HomeScreen");
  };
  const handleLogin = () => {
    navigation.navigate("LogInScreen");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity
          style={styles.backButtonWrapper}
          onPress={handleGoBack}
        >
          <Ionicons
            name={"arrow-back-outline"}
            color={colors.primary}
            size={25}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Let's get</Text>
          <Text style={styles.headingText}>started</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name={"mail-outline"} size={24} color={colors.secondary} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              placeholderTextColor={colors.secondary}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <SimpleLineIcons name={"lock"} size={24} color={colors.secondary} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor={colors.secondary}
              secureTextEntry={secureEntry}
            />
            <TouchableOpacity
              onPress={() => {
                setSecureEntry((prev) => !prev);
              }}
            >
              <SimpleLineIcons name={"eye"} size={24} color={colors.secondary} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <SimpleLineIcons
              name={"screen-smartphone"}
              size={24}
              color={colors.secondary}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your phone no"
              placeholderTextColor={colors.secondary}
              keyboardType="phone-pad"
            />
          </View>
          <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleLoginexitoso}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.continueText}>or continue with</Text>
          <TouchableOpacity style={styles.googleButtonContainer}>
            <Ionicons name="logo-google" size={30} color={colors.primary} />
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
          <View style={styles.footerContainer}>
            <Text style={styles.accountText}>Already have an account!</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.signupText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: "#F4F7FC", 
  },
  scrollContainer: {
    flexGrow: 1,
    padding: width > 100 ? 10 : 25,
    alignItems: "center",
    paddingBottom: 30,
    justifyContent: "center",
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: "#FF6F61", 
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  textContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  headingText: {
    fontSize: width > 600 ? 40 : 32,
    color: "#3D5A80", 
    fontFamily: fonts.SemiBold,
    letterSpacing: 3,
  },
  formContainer: {
    marginTop: 20,
    width: width > 600 ? "50%" : "100%",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#E1E8F1", 
    borderRadius: 30, 
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: "#FFFFFF", 
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: fonts.Light,
    fontSize: 16,
    color: "#3D5A80", 
  },
  loginButtonWrapper: {
    backgroundColor: "#FF6F61", 
    borderRadius: 30,
    marginTop: 20,
    padding: 12,
    shadowColor: "#FF6F61",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    textAlign: "center",
    textTransform: "uppercase",
  },
  continueText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: "#3D5A80",
    fontStyle: "italic",
    letterSpacing: 1,
  },
  googleButtonContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#FF6F61", 
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    gap: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#FF6F61",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: "#3D5A80", 
    fontFamily: fonts.Regular,
    fontSize: 16,
  },
  signupText: {
    color: "#FF6F61", 
    fontFamily: fonts.Bold,
    fontSize: 18,
    textDecorationLine: "underline",
    letterSpacing: 0.5,
    fontWeight: "900",
  },
});

