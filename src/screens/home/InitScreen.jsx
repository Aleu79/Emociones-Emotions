import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";
import { colors } from "../../utils/colors"; 
import { fonts } from "../../utils/fonts";
import { useNavigation } from "@react-navigation/native";
import { useLanguage } from "../../context/LanguageContext";

const screenWidth = Dimensions.get('window').width; // Ancho de la pantalla
const screenHeight = Dimensions.get('window').height; // Alto de la pantalla

const InitScreen = () => {
  const navigation = useNavigation();
  const { toggleLanguage, translate, language } = useLanguage(); 

  const handleLogin = () => {
    navigation.navigate("LogInScreen");
  };

  const handleSignup = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleLanguage} style={styles.languageButton}>
        <Image 
          source={language === 'en' ? require('../../../assets/ar.png') : require('../../../assets/uk.png')} // Cambia la ruta de las imágenes según corresponda
          style={styles.languageIcon}
        />
        <Text style={styles.languageButtonText}>
          {language === 'en' ? 'Switch to Español' : 'Cambiar a English'}
        </Text>
      </TouchableOpacity>
      <Image source={require("../../../assets/man.png")} style={styles.bannerImage} />
      <Text style={styles.title}>{translate("welcome")}</Text>
      <Text style={styles.subTitle}>
        {translate("descripcion")}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.loginButtonWrapper, { backgroundColor: "#FF6F61" }]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>{translate("login")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupButtonWrapper} 
          onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>{translate("signup")}</Text>
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
    paddingTop: screenHeight * 0.05, // Usamos un porcentaje del alto de la pantalla
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 10,
  },
  bannerImage: {
    marginVertical: screenHeight * 0.03, // Usamos porcentaje del alto de la pantalla
    height: screenHeight * 0.3, // 30% de la altura de la pantalla
    width: screenWidth * 0.6, // 60% del ancho de la pantalla
  },
  title: {
    fontSize: screenWidth * 0.1, // 10% del ancho de la pantalla
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
    textAlign: "center",
    color: "#3D5A80", 
    marginTop: 40,
  },
  subTitle: {
    fontSize: screenWidth * 0.05, // 5% del ancho de la pantalla
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
    fontSize: screenWidth * 0.05, // 5% del ancho de la pantalla
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
    fontSize: screenWidth * 0.05, // 5% del ancho de la pantalla
    fontFamily: fonts.SemiBold,
  },
  languageButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#F8F8F8", // Fondo más claro
    borderRadius: 30,
    flexDirection: 'row', // Alineamos el icono y el texto
    alignItems: 'center', // Centrado del contenido
    borderWidth: 1, // Le agregué un borde sutil
    borderColor: '#DDDDDD', // Color del borde
  },
  languageButtonText: {
    color: "#333333", // Color de texto más oscuro para contraste
    fontSize: screenWidth * 0.04, // 4% del ancho de la pantalla
    fontFamily: fonts.SemiBold,
    marginLeft: 10, // Espaciado entre la imagen y el texto
  },
  languageIcon: {
    width: 20, // Tamaño de la bandera
    height: 20,
    marginRight: 10, // Espaciado entre la imagen y el texto
  },

});
