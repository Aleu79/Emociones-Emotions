import React from 'react';
import { View, ActivityIndicator, Animated } from 'react-native';

const Loading = () => {
  const fadeAnim = new Animated.Value(0); 

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1, 
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0, 
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);

  return (
    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 20 }}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <ActivityIndicator size={40} color="#3B82F6" />
      </Animated.View>
    </View>
  );
};

export default Loading;
