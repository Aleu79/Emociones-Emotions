import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import TabNavigator from "../../navigation/TabNavigator";

const HomeScreen = () => {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
        {/* Header */}
        <View className="bg-black/90 pt-10 px-5 h-40 w-full">
          <View className="flex-row items-center justify-between mb-12">
            <Text className="text-white font-bold text-lg">SIX PACK IN 30 DAYS</Text>

            {/* Dark Mode */}
            <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
              {showIcon ? (
                <Ionicons name="sunny" size={24} color="white" />
              ) : (
                <Ionicons name="moon" size={24} color="white" />
              )}
            </TouchableOpacity>
          </View>

          {/* Cards Row */}
          <View className="flex-row items-center justify-between">
            {/* First Card */}
            <View className="bg-white w-1/3 h-20 rounded-lg items-center justify-center shadow">
              <Text className="font-medium">KCAL</Text>
            </View>

            {/* Second Card */}
            <View className="bg-white w-1/3 h-20 rounded-lg items-center justify-center shadow">
              <Text className="font-medium">WORKOUTS</Text>
            </View>

            {/* Third Card */}
            <View className="bg-white w-1/3 h-20 rounded-lg items-center justify-center shadow">
              <Text className="font-medium">MINUTES</Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View className="flex-1 pb-16">
        </View>
      </ScrollView>

      {/* Tab Navigator */}
      <View className="absolute bottom-0 left-0 right-0">
        <TabNavigator />
      </View>
    </View>
  );
};

export default HomeScreen;
