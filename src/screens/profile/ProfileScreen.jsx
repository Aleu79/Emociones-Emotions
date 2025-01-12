import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import TabNavigator from '../../navigation/TabNavigator'; 
import { useLanguage } from '../../context/LanguageContext';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
    const { translate } = useLanguage();

    const handleShareProfile = () => {
        console.log('Compartir perfil');
    };
    const handleMenuPress = () => {
        console.log('Abrir configuración');
    };

    return (
        <View className="flex-1 bg-white">
            <View className="absolute top-12 right-4">
                <TouchableOpacity onPress={handleMenuPress}>
                    <Icon name="menu-outline" size={30} color="#007bff" />
                </TouchableOpacity>
            </View>

            <View className="p-4 mt-24">
                <View className="flex items-center mb-8">  
                    <Image 
                        source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} 
                        className="w-24 h-24 rounded-full" 
                    />
                </View>

                <Text className="text-xl font-bold text-center mb-2">Nombre del usuario</Text>
                <Text className="text-sm text-gray-500 text-center mb-4">Correo electrónico</Text>

                <View className="flex-row justify-evenly w-full mb-8"> 
                    <View className="items-center">
                        <Text className="text-lg font-semibold">0</Text>
                        <Text className="text-sm text-gray-500">{translate("publicaciones")}</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-lg font-semibold">0</Text>
                        <Text className="text-sm text-gray-500">{translate("seguidores")}</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-lg font-semibold">0</Text>
                        <Text className="text-sm text-gray-500">{translate("siguiendo")}</Text>
                    </View>
                </View>

                <View className="flex-row justify-center items-center mt-6"> 
                    <TouchableOpacity onPress={handleShareProfile} className="bg-blue-500 p-2 rounded-full">
                        <Text className="text-white font-semibold">{translate("compartirPerfil")}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="ml-6">
                        <Text className="text-blue-500 font-semibold">{translate("editarPerfil")}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TabNavigator />
        </View>
    );
};

export default ProfileScreen;
