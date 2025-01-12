import React, { useState, useEffect, createContext, useContext } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "../services/Firebase-config";
import { useLanguage } from "./LanguageContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  const { translate } = useLanguage();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  const registerUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      Alert.alert(translate("registrationSuccess"), translate("registrationMessage"));
      navigation.navigate("HomeScreen");
      return true;
    } catch (error) {
      let errorMessage = translate("unknownError");
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = translate("invalidEmail");
          break;
        case "auth/email-already-in-use":
          errorMessage = translate("emailInUse");
          break;
        case "auth/weak-password":
          errorMessage = translate("weakPassword");
          break;
        case "auth/missing-email":
          errorMessage = translate("missingEmail");
          break;
        case "auth/missing-password":
          errorMessage = translate("missingPassword");
          break;
        case "auth/network-request-failed":
          errorMessage = translate("networkError");
          break;
        default:
          errorMessage = error.message;
      }
      console.error("Error registrando el usuario en el contexto:", errorMessage);
      throw new Error(errorMessage);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      Alert.alert(translate("loginSuccess"), translate("loginMessage"));
      navigation.navigate("HomeScreen");
    } catch (error) {
      let errorMessage = translate("unknownError");
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = translate("invalidEmail");
          break;
        case "auth/user-disabled":
          errorMessage = translate("userDisabled");
          break;
        case "auth/user-not-found":
          errorMessage = translate("noUserFound");
          break;
        case "auth/too-many-requests":
          errorMessage = translate("tooManyRequests");
          break;
        case "auth/network-request-failed":
          errorMessage = translate("networkError");
          break;
        default:
          errorMessage = error.message;
      }
      throw new Error(errorMessage);
    }
  };

  const resetPassword = async (email) => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      Alert.alert(translate("invalidEmail"), translate("checkEmailFormat"));
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(translate("passwordResetSent"), translate("passwordResetMessage"));
    } catch (error) {
      let errorMessage = translate("unknownError");
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = translate("invalidEmail");
          break;
        case "auth/user-not-found":
          errorMessage = translate("noUserFound");
          break;
        default:
          errorMessage = error.message;
      }
      console.error("Error restableciendo la contraseña:", errorMessage);
      throw new Error(errorMessage);
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
      Alert.alert(translate("logoutSuccess"), translate("logoutMessage"));
      navigation.navigate("LoginScreen");
    } catch (error) {
      console.error("Error cerrando sesión:", error.message);
      Alert.alert(translate("logoutError"), translate("tryAgain"));
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, registerUser, loginUser, resetPassword, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
