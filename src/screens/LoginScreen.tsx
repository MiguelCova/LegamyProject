import React from 'react'
import { View } from 'react-native'
import { LoginCard } from '../components/LoginCard';

export const LoginScreen = () => {

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#1c4c96',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20
    }}>
        <LoginCard/>
    </View>
  )
}

