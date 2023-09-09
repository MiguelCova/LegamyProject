import React, { useEffect, useState } from 'react'
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    onDebounce: ( value: string ) => void;
    style?: StyleProp<ViewStyle>
}

export const SearchInput = ({ style, onDebounce }:Props) => {

    const [textValue , setTextValue] = useState('');

    const deboncedValue = useDebouncedValue( textValue );

    useEffect(() => {
        onDebounce(deboncedValue);
    }, [deboncedValue])

    return (
        <View style={{
            ...styles.container,
            ...style as any
            }}>
            <View style={styles.textBackground}>

                <TextInput
                    placeholder='Buscar'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={ setTextValue }
                />
                <Icon 
                    name='magnifying-glass'
                    size={20}
                    color={'grey'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 7,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: 2
    }
})