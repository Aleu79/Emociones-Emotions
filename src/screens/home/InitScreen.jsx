import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../utils/colors"; 
import { fonts } from "../../utils/fonts";
import { useNavigation } from "@react-navigation/native";

const InitScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("LogInScreen");
  };

  const handleSignup = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <Image source={require("../../../assets/man.png")} style={styles.bannerImage} />
      <Text style={styles.title}>Welcome to Emotions</Text>
      <Text style={styles.subTitle}>
        Emotions is a social network designed for users to express and share their daily emotions through posts categorized by emotional states (happiness, sadness, anger, etc.)
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: "#FF6F61" }, 
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupButtonWrapper} 
          onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FC",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 10,
  },
  bannerImage: {
    marginVertical: 20,
    height: 250,
    width: 231,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
    textAlign: "center",
    color: "#3D5A80", 
    marginTop: 40,
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center",
    color: "#3D5A80", 
    fontFamily: fonts.Medium,
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    width: "80%",
    height: 50,
    justifyContent: "space-between",
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
    borderRadius: 30,
    height: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  loginButtonText: {
    color: "#FFFFFF", 
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  signupButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "48%", 
    borderRadius: 30,
    height: "100%", 
    borderWidth: 2,
    borderColor: "#FF6F61",
    backgroundColor: "transparent", 
    shadowColor: "#FF6F61",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  signupButtonText: {
    color: "#FF6F61", 
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
});
