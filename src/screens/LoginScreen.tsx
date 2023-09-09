import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
        <Text>LoginScreen</Text>
        <TouchableOpacity
          onPress={ 
            () => navigation.navigate('HomeScreen')
          }
        >
                  <Text>Home</Text>

        </TouchableOpacity>
    </View>
  )
}

