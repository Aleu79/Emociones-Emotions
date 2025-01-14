import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";

const TabNavigator = ({ isDarkTheme }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View
      className={`absolute bottom-0 left-0 right-0 flex-row justify-around items-center py-3 ${
        isDarkTheme ? "bg-[#1a1a1a] border-t border-[#333]" : "bg-white border-t border-[#ccc]"
      }`}
    >
      <TouchableOpacity onPress={() => handleNavigate("HomeScreen")}>
        <Icon
          name="home-outline"
          size={30}
          color={route.name === "HomeScreen" ? (isDarkTheme ? "#ffcc00" : "#333") : (isDarkTheme ? "#fff" : "#333")}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon
          name="search-outline"
          size={30}
          color={isDarkTheme ? "#fff" : "#333"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigate("SocialScreen")}>
        <Icon
          name="add-circle-outline"
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

      <TouchableOpacity onPress={() => handleNavigate("Profile")}>
        <Icon
          name="person-outline"
          size={30}
          color={route.name === "ProfileScreen" ? (isDarkTheme ? "#ffcc00" : "#333") : (isDarkTheme ? "#fff" : "#333")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TabNavigator;

// <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
//   {showIcon ? (
//     <Ionicons name="sunny" size={24} color="white" />
//   ) : (
//     <Ionicons name="moon" size={24} color="white" />
//   )}
// </TouchableOpacity>