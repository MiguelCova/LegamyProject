import React from 'react'
import { View } from 'react-native'
import { RegisterCard } from '../components/RegisterCard';

export const RegisterScreen = () => {

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#1c4c96',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20
    }}>
        <RegisterCard/>
    </View>
  )
}

