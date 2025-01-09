import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";  

const CustomInput = ({
  iconNameSimple,         
  iconNameIocons,         
  iconColor = '#6b7280',
  placeholder,            
  keyboardType = 'default',
  value,                  
  onChangeText,    
  secureTextEntry,        
  onPressEye,             
}) => {
  const [isSecureText, setIsSecureText] = useState(secureTextEntry);

  const toggleSecureTextEntry = () => {
    setIsSecureText(!isSecureText);  
    if (onPressEye) {
      onPressEye();  
    }
  };

  return (
    <View style={styles.inputContainer}>
      {iconNameSimple && (
        <SimpleLineIcons name={iconNameSimple} size={20} color={iconColor} />
      )}
      {iconNameIocons && (
        <Ionicons name={iconNameIocons} size={20} color={iconColor} />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#6b7280"
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecureText}
      />
      {secureTextEntry !== undefined && (
        <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.eyeIcon}>
          <Ionicons 
            name={isSecureText ? "eye-outline" : "eye-off-outline"} 
            size={20} 
            color={iconColor} 
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  input: {
    flex: 1,
    height: 55,
    fontSize: 17,
    marginLeft: 10,
    backgroundColor: 'transparent',
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
  },
});

export default CustomInput;
