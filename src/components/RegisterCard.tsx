import React from 'react'
import { Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native'
import { globalStyles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native';

export const RegisterCard = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{ width: '100%' }}
        >

            <View style={{ ...globalStyles.card }}>

                <Text
                    style={{
                        ...globalStyles.subtitle,
                        ...globalStyles.textGray,
                        
                    }}
                >Crear cuenta
                </Text>
                <Text
                    style={{
                        marginBottom: 15,
                        fontSize: 12
                    }}
                >Crea tu cuenta en la plataforma</Text>
                <Text
                    style={{ ...globalStyles.inputLabel }}
                >Nombre:
                </Text>

                <TextInput
                    placeholder='Email'
                    autoCorrect={false}
                    style={{ ...globalStyles.input }}
                />
                <Text
                    style={{ ...globalStyles.inputLabel }}
                >Email:
                </Text>

                <TextInput
                    placeholder='Email'
                    autoCorrect={false}
                    style={{ ...globalStyles.input }}
                />

                <Text
                    style={{ ...globalStyles.inputLabel }}
                >Contraseña:
                </Text>




                <TextInput
                    placeholder='Contraseña'
                    autoCorrect={false}
                    style={{ ...globalStyles.input }}
                />


                <TouchableOpacity
                    style={{ ...globalStyles.btn, ...globalStyles.btnPrimary, marginTop: 20 }}
                    onPress={
                        () => navigation.navigate('HomeScreen')
                    }
                >
                    <Text
                        style={{ ...globalStyles.btnText }}
                    >Crear cuenta</Text>

                </TouchableOpacity>

            </View>
            <View style={{
                position: 'absolute',
                bottom: -60,
                left: 0,
                right: 0,
            }}>
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >

                <Text
                style={{
                    color: 'white'
                }}
                >¿Ya tienes cuenta?</Text>
                <TouchableOpacity
                onPress={
                    () => navigation.navigate('LoginScreen')
                }
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}
                    >Iniciar sesión</Text>
                </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}



