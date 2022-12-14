import {View, Text, Button} from 'react-native';
import React from 'react';

const Login = ({navigation, route}) => {
  const handlePress = () => {
    navigation.navigate('register');
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Button title="register" onPress={handlePress} />
    </View>
  );
};

export default Login;
