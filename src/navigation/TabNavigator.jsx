import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const TabNavigator = ({ isDarkTheme, unreadNotifications }) => {
  return (
    <View
      className={`absolute bottom-0 left-0 right-0 flex-row justify-around items-center py-3 ${
        isDarkTheme ? "bg-[#1a1a1a] border-t border-[#333]" : "bg-white border-t border-[#ccc]"
      }`}
    >
      <TouchableOpacity>
        <Icon
          name="home-outline"
          size={30}
          color={isDarkTheme ? "#fff" : "#333"}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <View className="relative items-center">
          <Icon
            name="mail-outline"
            size={30}
            color={isDarkTheme ? "#fff" : "#333"}
          />
          {unreadNotifications > 0 && (
            <View className="absolute -top-1 -right-1 bg-[#e74c3c] rounded-full w-5 h-5 justify-center items-center">
              <Text className="text-white text-xs font-bold">
                {unreadNotifications}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <FontAwesome
          name="linux"
          size={35}
          color={isDarkTheme ? "#fff" : "#333"}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon
          name="chatbubble-outline"
          size={30}
          color={isDarkTheme ? "#fff" : "#333"}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon
          name="person-outline"
          size={30}
          color={isDarkTheme ? "#fff" : "#333"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TabNavigator;
