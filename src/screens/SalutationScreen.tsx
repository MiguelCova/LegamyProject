import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { globalStyles } from '../theme/appTheme';


export const SalutationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ ...globalStyles.container, flex: 1 }}>
      <Text
        style={{
          ...globalStyles.salutation,
          position: 'absolute',
          bottom: 300,
          right: 0
        }}
      >¡Bienvenidos!</Text>
      <Text
        style={{
          ...globalStyles.salutationDos,
        }}
      >Esperemos esta aplicación sea de su agrado</Text>
      <View
        style={{
          position: 'absolute',
          bottom: 100,
          width: '100%'
        }}
      >

      <TouchableOpacity
        onPress={
          () => navigation.navigate('LoginScreen')
        }
      >
        <View style={{
          ...globalStyles.btn,
          ...globalStyles.btnPrimary,
        }}>
          <Text
            style={{
              ...globalStyles.btnText
            }}
          >Inicio</Text>

        </View>

      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btnPosition: {

  }
});
