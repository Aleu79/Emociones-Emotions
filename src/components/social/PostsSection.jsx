import React, { useState } from "react";
import { View, Text,ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Modalize } from 'react-native-modalize'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import CustomInput from "../Common/CustomInput";

const PostsSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const posts = [
    { id: "1", name: "Damián", image: "https://randomuser.me/api/portraits/men/4.jpg", avatar: "https://randomuser.me/api/portraits/men/1.jpg", text: "¡Hoy es un gran día!", likes: 35, comments: 12 },
    { id: "2", name: "Juan", image: "https://randomuser.me/api/portraits/men/5.jpg", avatar: "https://randomuser.me/api/portraits/men/2.jpg", text: "Explorando la ciudad.", likes: 58, comments: 8 },
    { id: "3", name: "María", image: "https://randomuser.me/api/portraits/women/2.jpg", avatar: "https://randomuser.me/api/portraits/women/1.jpg", text: "A disfrutar de la vida.", likes: 92, comments: 21 },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
      <View className="bg-white py-4">
        <View className="px-5">
          <Text className="text-lg font-semibold mb-4">Publicaciones</Text>
          {posts.map((post) => (
            <View key={post.id} className="mb-6 bg-white p-4 rounded-lg shadow">
              <View className="flex-row items-center mb-3">
                <Image
                  source={{ uri: post.avatar }}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
                <Text className="ml-3 font-semibold">{post.name}</Text>
              </View>
              <Text className="mb-3">{post.text}</Text>
              <Image
                source={{ uri: post.image }}
                style={{ width: "100%", height: 250, borderRadius: 8 }}
              />
              <View className="flex-row mt-3 justify-between">
                <View className="flex-row items-center">
                  <TouchableOpacity className="flex-row items-center">
                    <Ionicons name="heart-outline" size={24} color="#000" />
                    <Text className="ml-1">{post.likes}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="flex-row items-center ml-6"
                  > 
                    <Ionicons name="chatbubble-outline" size={24} color="#000" />
                    <Text className="ml-1">{post.comments}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity className="flex-row items-center">
                  <Ionicons name="bookmark-outline" size={24} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
      </ScrollView>

    </GestureHandlerRootView>
  );
};

export default PostsSection;
