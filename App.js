import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View className="flex-1">
      <Icon name="ios-book" color="#4F8EF7" />
      <Text className="text-red-500">Min Ga Lar Par</Text>
    </View>
  );
};

export default App;
