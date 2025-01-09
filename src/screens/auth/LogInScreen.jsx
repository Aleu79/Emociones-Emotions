import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../components/Loading/Loading";
import CustomInput from "../../components/Common/CustomInput";
import { useLanguage } from "../../context/LanguageContext";

const LogInScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { translate} = useLanguage(); 


  const handleLogin = () => {
    navigation.navigate("RegisterScreen");
  };
  const handleLoginexitoso = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("HomeScreen");
    }, 2000); 
  };
  const handleGoBack = () => {
    navigation.navigate("InitScreen");
  };
  const ForgotPasswordScreen = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
        style={styles.scrollView}
      >
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={handleGoBack}
        >
          <Ionicons name="chevron-back-outline" color="#000" size={20} />
        </TouchableOpacity>
        
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{translate("heywelcome")}</Text>
          <Text style={styles.titleText}>{translate("heywelcomeback")}</Text>
        </View>

        <View style={styles.inputContainer}>
          <CustomInput
            iconNameSimple="user"
            placeholder={translate("enterusername")}
          />
          <CustomInput
            iconNameIocons="lock-closed-outline"
            placeholder={translate("enterPassword")}
            secureTextEntry={true}
            onPressEye={() => console.log("Eye pressed")}
          />
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity onPress={ForgotPasswordScreen}>
              <Text style={styles.forgotPasswordText}>{translate("forgotPassword")}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleLoginexitoso}
          >
            <Text style={styles.buttonText}>{translate("login")}</Text>
            <View style={styles.loadingContainer}>
              {loading && <Loading />}
            </View>
          </TouchableOpacity>

          <Text style={styles.orText}>{translate("orcontinue")}</Text>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-google" size={25} color="#FF6F61" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-github" size={25} color="#FF6F61" />
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>{translate("haveaccount")}</Text>
            <TouchableOpacity onPress={handleLogin} style={styles.loginLink}>
              <Text style={styles.loginText}>{translate("signup")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 20,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  goBackButton: {
    height: 40,
    width: 40,
    backgroundColor: "#FF6F61",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
  titleContainer: {
    marginTop: 40,
    marginBottom: 10,
    width: "100%",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
  inputContainer: {
    marginBottom: 20,
  },
  forgotPasswordContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  forgotPasswordText: {
    color: "#FF6F61",
  },
  button: {
    backgroundColor: "#FF6F61",
    borderRadius: 40,
    padding: 15,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  loadingContainer: {
    position: "absolute",
    right: 10,
    top: "100%",
    transform: [{ translateY: -20 }],
  },
  orText: {
    textAlign: "center",
    margin: 20,
    color: "#666",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FF6F61",
    borderRadius: 40,
    padding: 12,
    marginHorizontal: 10,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    color: "#666",
    fontSize: 16,
  },
  loginLink: {
    marginLeft: 8,
  },
  loginText: {
    color: "#FF6F61",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LogInScreen;
