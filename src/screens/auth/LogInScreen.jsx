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
import { useNavigation } from "@react-navigation/native";
import Loading from "../../components/Loading/Loading"; 
import CustomInput from "../../components/Common/CustomInput";

const LogInScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

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
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
        keyboardShouldPersistTaps="handled"
        style={{ paddingHorizontal: 20, paddingBottom: 20 }}
      >
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            backgroundColor: '#FF6F61',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
            alignSelf: 'flex-start',
            marginLeft: '5%',
          }}
          onPress={handleGoBack}
        >
          <Ionicons name="chevron-back-outline" color="#000" size={20} />
        </TouchableOpacity>
        
        <View style={{ marginTop: 40, marginBottom: 10, width: '100%' }}>
          <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#000', marginBottom: 8, alignSelf: 'flex-start', marginLeft: '5%' }}>
            Hey, Welcome
          </Text>
          <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#000', marginBottom: 8, alignSelf: 'flex-start', marginLeft: '5%' }}>
            Back
          </Text>
        </View>

        <View style={{ marginBottom: 20 }}>
          <CustomInput
            iconNameSimple="user"
            placeholder="Enter your username"
          />
          <CustomInput
            iconNameIocons="lock-closed-outline"
            placeholder="Enter your password"
            secureTextEntry={true}
            onPressEye={() => console.log("Eye pressed")}
          />
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <TouchableOpacity onPress={ForgotPasswordScreen}>
              <Text style={{ color: '#FF6F61' }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleLoginexitoso}
          >
            <Text style={styles.buttonText}>Login</Text>
            <View style={styles.loadingContainer}>
              {loading && <Loading />}
            </View>
          </TouchableOpacity>

          <Text style={{ textAlign: 'center', margin: 20, color: '#666' }}>
            or continue with
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-google" size={25} color="#FF6F61" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-github" size={25} color="#FF6F61" />
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Already have an account!</Text>
            <TouchableOpacity onPress={handleLogin} style={styles.loginLink}>
              <Text style={styles.loginText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = {
  button: {
    backgroundColor: '#FF6F61',
    borderRadius: 40,
    padding: 15,
    width: '90%', 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    alignSelf: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FF6F61',
    borderRadius: 40,
    padding: 12,
    marginHorizontal: 10,
  },
  loadingContainer: {
    position: 'absolute',
    right: 10,
    top: '95%',
    transform: [{ translateY: -20 }],
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

export default LogInScreen;
