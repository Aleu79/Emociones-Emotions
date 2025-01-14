import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../context/UserContext";
import CustomInput from "../../components/Common/CustomInput";
import { useLanguage } from "../../context/LanguageContext";
import Loading from "../../components/Loading/Loading";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const { registerUser } = useUser();
  const [loading, setLoading] = useState(false);
  const { translate } = useLanguage();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  

  const handleRegister = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      await registerUser(email, password);
      Alert.alert(
        translate("verificationRequired"),
        translate("checkEmailToVerify")
      );
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  

  const handleLogin = () => {
    navigation.navigate("LogInScreen");
  };

  const handleGoBack = () => {
    navigation.navigate("InitScreen");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.form}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={handleGoBack}
        >
          <Ionicons name="chevron-back-outline" color="#000" size={20} />
        </TouchableOpacity>

        <View style={styles.headerContainer}>
          <Text style={styles.title}>{translate("welcomeregister")}</Text>
          <Text style={styles.title}>{translate("welcomeregisterstart")}</Text>
        </View>

        <CustomInput
          iconNameSimple="user"
          placeholder={translate("enterusername")}
          value={user}
          keyboardType="default"
          onChangeText={setUser}
        />
        <CustomInput
          iconNameIocons="mail-outline"
          placeholder={translate("enterEmail")}
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <CustomInput
          iconNameIocons="lock-closed-outline"
          placeholder={translate("enterPassword")}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        {errorMessage ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        ) : null}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>{translate("signup")}</Text>
            <View style={styles.registerloadingContainer}>
              {loading && <Loading />}
            </View>
          </TouchableOpacity>

          <Text style={styles.orText}>{translate("orcontinue")}</Text>

          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.googleButton}>
              <Ionicons name="logo-google" size={25} color="#FF6F61" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
              <Ionicons name="logo-github" size={25} color="#FF6F61" />
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>{translate("alreadyhave")}</Text>
            <TouchableOpacity onPress={handleLogin} style={styles.loginLink}>
              <Text style={styles.loginText}>{translate("login")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = {
  form: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
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
  headerContainer: {
    marginTop: 40,
    marginBottom: 10,
    width: "100%",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
  buttonContainer: {
    width: "90%",
    marginTop: 20,
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
  registerloadingContainer: {
    position: "absolute",
    right: 10,
    top: "100%",
    transform: [{ translateY: -20 }],
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FF6F61",
    borderRadius: 40,
    padding: 12,
    marginHorizontal: 10,
  },
  orText: {
    textAlign: "center",
    margin: 20,
    color: "#666",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
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
  errorContainer: {
    width: "90%",
    backgroundColor: "#F8D7DA", 
    borderColor: "#F5C6CB", 
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    marginTop: 10,
  },
  errorText: {
    color: "#721C24", 
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default RegisterScreen;
