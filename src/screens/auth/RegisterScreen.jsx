import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Loading from "../../components/Loading/Loading";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    navigation.navigate("LogInScreen");
  };
  const handleLoginexitoso = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('HomeScreen');
    }, 2000); 
  };
  const handlegoogle = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('HomeScreen');
    }, 2000); 
  };

  const handleGoBack = () => {
    navigation.navigate("InitScreen");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.form}
        keyboardShouldPersistTaps="handled"
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
  
        <View style={{ marginTop: 40, marginBottom: 40, width: '100%' }}>
          <Text style={styles.title}>Let's get</Text>
          <Text style={styles.title}>started</Text>
        </View>
  
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#6b7280" />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#6b7280"
            keyboardType="email-address"
          />
        </View>
  
        <View style={styles.passwordContainer}>
          <SimpleLineIcons name="lock" size={20} color="#6b7280" />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#6b7280"
            secureTextEntry={secureEntry}
          />
          <TouchableOpacity
            onPress={() => setSecureEntry((prev) => !prev)}
            style={styles.eyeIcon}
          >
            <SimpleLineIcons name="eye" size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>
  
        <View style={styles.inputContainer}>
          <SimpleLineIcons name="screen-smartphone" size={20} color="#6b7280" />
          <TextInput
            style={styles.input}
            placeholder="Enter your phone no"
            placeholderTextColor="#6b7280"
            keyboardType="phone-pad"
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLoginexitoso}
          >
            <Text style={styles.buttonText}>Sign up</Text>
            <View style={styles.registerloadingContainer}>
              {loading && <Loading />}
            </View>
          </TouchableOpacity>
  
          <Text style={{ textAlign: 'center', margin: 20, color: '#666' }}>
            or continue with
          </Text>
  
          <TouchableOpacity style={styles.googleButton} onPress={handlegoogle}>
            <Ionicons name="logo-google" size={25} color="#FF6F61" />
            <Text style={styles.googleText}>
              Google
            </Text>
            <View style={styles.loadingContainer}>
              {loading && <Loading />}
            </View>
          </TouchableOpacity>
  
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: '#666', fontSize: 16 }}>
              Already have an account!
            </Text>
            <TouchableOpacity onPress={handleLogin} style={{ marginLeft: 8 }}>
              <Text style={{ color: '#FF6F61', fontSize: 18, fontWeight: 'bold', textDecorationLine: 'underline' }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
  
};
const styles = {
  form: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },
  subtitle: {
    fontSize: 20,
    color: '#aaaaaa',
    marginBottom: 24,
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },
  inputContainer: {
    width: '90%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: 16,
    fontSize: 17,
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
  },
  registerloadingContainer: {
    position: 'absolute',  
    right: 10,             
    top: '95%',            
    transform: [{ translateY: -20 }] 
  },  
  loadingContainer: {
    position: 'absolute',  
    right: 10,             
    top: '90%',            
    transform: [{ translateY: -20 }] 
  },  
  input: {
    flex: 1,
    height: 55,
    fontSize: 17,
    marginLeft: 10,
    backgroundColor: 'transparent',
  },
  passwordContainer: {
    width: '90%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  eyeIcon: {
    padding: 8,
  },

  buttonContainer: {
    width: '90%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FF6F61',
    borderRadius: 40,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FF6F61',
    borderRadius: 40,
    padding: 12,
  },
  googleText: {
    marginLeft: 8,
    color: '#FF6F61',
    fontSize: 18,
    fontWeight: '600',
  }
};

export default RegisterScreen;