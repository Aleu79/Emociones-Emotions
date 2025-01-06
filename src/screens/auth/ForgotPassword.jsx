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
  import { useNavigation } from "@react-navigation/native";
  
  const { width, height } = Dimensions.get("window");
  
  const LogInScreen = () => {
    const navigation = useNavigation();
      
    const handleLoginexitoso = () => {
      navigation.navigate("HomeScreen");
    };
  
    const handleGoBack = () => {
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
            <Text style={styles.headingText}>Forgot</Text>
            <Text style={styles.headingText}>Password</Text>
          </View>
  
          <Text style={styles.explanationText}>
            Please enter your registered email address. We will send you a link to reset your password.
          </Text>
  
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Ionicons name={"mail-outline"} size={30} color={colors.secondary} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                placeholderTextColor={colors.secondary}
                keyboardType="email-address"
              />
            </View>
            <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleLoginexitoso}>
              <Text style={styles.loginText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  export default LogInScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
    },
    scrollContainer: {
      flexGrow: 1,
      backgroundColor: colors.white,
      padding: width > 600 ? 50 : 25,
      alignItems: width > 600 ? "center" : "flex-start",
      paddingBottom: 30,
      paddingTop: 40,
      justifyContent: "center",
    },
    textContainer: {
      marginTop: 10,  
      marginVertical: 20,
      alignItems: width > 600 ? "center" : "flex-start",
    },
    headingText: {
      fontSize: width > 600 ? 40 : 32,
      color: colors.primary,
      fontFamily: fonts.SemiBold,
    },
    explanationText: {
      marginVertical: 10,
      fontSize: 16,
      color: colors.secondary,
      textAlign: "center",
      fontFamily: fonts.Regular,
    },
    formContainer: {
      marginTop: 30,
      width: width > 600 ? "50%" : "100%",
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: colors.secondary,
      borderRadius: 100,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      padding: 2,
      marginVertical: 15,
    },
    textInput: {
      flex: 1,
      paddingHorizontal: 10,
      fontFamily: fonts.Light,
    },
    loginButtonWrapper: {
      backgroundColor: colors.primary,
      borderRadius: 100,
      marginTop: 40, 
      padding: 10,
    },
    loginText: {
      color: colors.white,
      fontSize: width > 600 ? 24 : 20,
      fontFamily: fonts.SemiBold,
      textAlign: "center",
    },
    backButtonWrapper: {
      height: 40,
      width: 40,
      backgroundColor: colors.gray,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      marginTop: -200,  // Ajustado para mover más arriba
      alignSelf: "flex-start",
    },
  });
  