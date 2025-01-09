import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Loading from "../../components/Loading/Loading";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/Common/CustomInput";
import { useLanguage } from "../../context/LanguageContext";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { translate} = useLanguage(); 


  const handleLogin = () => {
    navigation.navigate("LogInScreen");
  };

  const handleLoginexitoso = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("HomeScreen");
    }, 2000);
  };

  const handlegoogle = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("HomeScreen");
    }, 2000);
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
        />
        <CustomInput
          iconNameIocons="mail-outline"
          placeholder={translate("enterEmail")}
          keyboardType="email-address"
        />
        <CustomInput
          iconNameIocons="lock-closed-outline"
          placeholder={translate("enterPassword")}
          secureTextEntry={true}
          onPressEye={() => console.log("Eye pressed")}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLoginexitoso}
          >
            <Text style={styles.buttonText}>{translate("signup")}</Text>
            <View style={styles.registerloadingContainer}>
              {loading && <Loading />}
            </View>
          </TouchableOpacity>

          <Text style={styles.orText}>{translate("orcontinue")}</Text>

          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.googleButton} onPress={handlegoogle}>
              <Ionicons name="logo-google" size={25} color="#FF6F61" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton} onPress={handlegoogle}>
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
};

export default RegisterScreen;
