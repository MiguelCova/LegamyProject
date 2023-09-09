import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const SalutationScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
        <Text>SalutationScreen</Text>
        <TouchableOpacity
          onPress={ 
            () => navigation.navigate('LoginScreen')
          }
        >
                  <Text>Inicio</Text>

        </TouchableOpacity>
    </View>
  )
}
