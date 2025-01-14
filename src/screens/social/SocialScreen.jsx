import React from "react";
import { View, Text, ScrollView } from "react-native";
import StoriesSection from "../../components/social/StoriesSection";
import PostsSection from "../../components/social/PostsSection";
import TabNavigator from "../../navigation/TabNavigator";

const SocialScreen = ({ isDarkTheme }) => {
  return (
    <View className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 mt-6"
        contentContainerStyle={{ paddingBottom: 50 }} 
      >
        <StoriesSection />
        <PostsSection />
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0">
        <TabNavigator isDarkTheme={isDarkTheme} />
      </View>
    </View>
  );
};

export default SocialScreen;
