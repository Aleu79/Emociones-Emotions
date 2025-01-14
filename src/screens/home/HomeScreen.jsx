import React, { useState } from "react";
import { View, ScrollView,Text, Image, TouchableOpacity, Animated, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TabNavigator from "../../navigation/TabNavigator";
import HeaderHome from "../../components/social/HeaderHome";

const HomeScreen = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const { height } = Dimensions.get("window");

  const handlePressIn = () => {
    Animated.timing(animation, {
      toValue: -(height * 0.05), 
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className="flex-1 bg-blue-100">
      <Text>dalskalsk</Text>
      <Animated.View
        style={{
          transform: [{ translateY: animation }],
          position: "absolute",
          bottom: height * 0.10, 
          right: "5%",
        }}
      >
        <TouchableOpacity
          className="bg-blue-500 rounded-full w-16 h-16 justify-center items-center"
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => console.log("Botón Más presionado")}
        >
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>
      </Animated.View>

      <View className="absolute bottom-0 left-0 right-0">
        <TabNavigator/> 
      </View>
    </View>
  );
};

export default HomeScreen;
