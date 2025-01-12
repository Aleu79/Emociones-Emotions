import React, { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TabNavigator from "../../navigation/TabNavigator";

const HomeScreen = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
        <ImageBackground
          source={require("../../../assets/home2.jpg")}
          className="h-72 px-5 pt-10"
        >
          <View className="absolute top-10 left-5">
            <Text className="text-white font-bold text-3xl">Hola, Damián</Text>
            <Text className="text-white text-lg mt-2">
              Hoy es {new Date().toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>

        <View className="mt-6 px-5">
          <Text className="text-lg font-semibold mb-4">¿Cómo te sientes hoy?</Text>
          <View className="flex-row justify-between">
            {[
              { mood: "Feliz", icon: "happy-outline" },
              { mood: "Triste", icon: "sad-outline" },
              { mood: "Relajado", icon: "cloud-outline" },
              { mood: "Estresado", icon: "alert-circle-outline" },
            ].map((item) => (
              <TouchableOpacity
                key={item.mood}
                className={`items-center justify-center w-16 h-16 rounded-full ${
                  selectedMood === item.mood ? "bg-blue-300" : "bg-gray-200"
                }`}
                onPress={() => handleMoodSelect(item.mood)}
              >
                <Ionicons name={item.icon} size={28} color="#000" />
                <Text className="text-xs mt-2">{item.mood}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="mt-8 px-5">
          <Text className="text-lg font-semibold mb-4">Resumen de hoy</Text>
          <View className="flex-row justify-between">
            <View className="bg-white w-1/3 h-20 rounded-lg items-center justify-center shadow">
              <Text className="font-medium text-blue-600">Horas Dormidas</Text>
              <Text className="font-bold text-lg">7.5</Text>
            </View>

            <View className="bg-white w-1/3 h-20 rounded-lg items-center justify-center shadow">
              <Text className="font-medium text-blue-600">Pasos</Text>
              <Text className="font-bold text-lg">8,200</Text>
            </View>

            <View className="bg-white w-1/3 h-20 rounded-lg items-center justify-center shadow">
              <Text className="font-medium text-blue-600">Agua</Text>
              <Text className="font-bold text-lg">2L</Text>
            </View>
          </View>
        </View>

        <View className="flex-1 pb-16 mt-8 px-5">
          <Text className="text-lg font-semibold mb-4">Notas</Text>
          <TouchableOpacity className="bg-gray-200 w-full h-14 rounded-lg items-center justify-center">
            <Text className="text-gray-600">Añadir una nota para hoy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0">
        <TabNavigator />
      </View>
    </View>
  );
};

export default HomeScreen;
