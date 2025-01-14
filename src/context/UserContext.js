import React, { useState, useEffect, createContext, useContext } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  sendEmailVerification,
} from "../services/Firebase-config";
import { useLanguage } from "./LanguageContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  const { translate } = useLanguage();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser && firebaseUser.emailVerified) {
        navigation.navigate("HomeScreen"); 
      }
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (auth.currentUser && !auth.currentUser.emailVerified) {
        await auth.currentUser.reload();
        if (auth.currentUser.emailVerified) {
          setUser(auth.currentUser); 
          Alert.alert(translate("verificationSuccess"), translate("welcomeHome"));
          navigation.navigate("HomeScreen");
        }
      }
    }, 5000); 

    return () => clearInterval(interval); 
  }, [navigation, translate]);

  const registerUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);
      Alert.alert(translate("verificationSent"), translate("verificationMessage"));

      setUser(user);
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
        default:
          errorMessage = error.message;
      }
      console.error("Error registrando usuario:", errorMessage);
      throw new Error(errorMessage);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        Alert.alert(
          translate("verificationRequired"),
          translate("checkEmailToVerify")
        );
      } else {
        setUser(user);
        Alert.alert(translate("loginSuccess"), translate("loginMessage"));
        navigation.navigate("HomeScreen");
      }
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
