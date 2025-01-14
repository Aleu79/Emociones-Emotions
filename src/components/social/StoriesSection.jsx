import React from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const StoriesSection = () => {
  const stories = [
    { id: "1", name: "Damián", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: "2", name: "Juan", image: "https://randomuser.me/api/portraits/men/2.jpg", hasStory: true },
    { id: "3", name: "María", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: "4", name: "Pedro", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  ];

  return (
    <View className="bg-white py-4">
      <View className="px-5 mb-4 flex flex-row justify-between items-center" style={{ width: "100%" }}>
        <Text className="text-lg font-semibold" style={{ flex: 1 }}>Historias</Text>
        <View style={{ justifyContent: "flex-end" }}>
          <Ionicons name="camera" size={30} color="#000" />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: width * 0.5 }} 
      >
        {stories.map((story) => (
          <View key={story.id} className="mr-4 flex items-center" style={{ marginLeft: 10, marginRight: 10 }}> 
            <View className="relative">
              <Image
                source={{ uri: story.image }}
                style={{
                  width: width * 0.25,
                  height: width * 0.25, 
                  borderRadius: width * 0.125,
                  borderWidth: story.hasStory ? 3 : 0,
                  borderColor: story.hasStory ? "#34D399" : "transparent",
                }}
              />
            </View>
            <Text className="text-center text-xs mt-2">{story.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default StoriesSection;
