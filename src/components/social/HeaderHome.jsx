import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HeaderHome = () => {
  return (
    <View className="bg-blue-100 h-16 flex-row items-center justify-between px-4 absolute top-0 left-0 right-0 z-50">
      <Text className="text-black text-base font-bold">
        {new Date().toLocaleDateString()}
      </Text>
      <MaterialCommunityIcons 
        name="crown"
        size={24}
        color="yellow"
      />
    </View>
  );
};

export default HeaderHome;