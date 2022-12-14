import {View, Button} from 'react-native';
import React from 'react';

const Register = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('login');
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Button onPress={handlePress} title="Login" />
    </View>
  );
};

export default Register;
