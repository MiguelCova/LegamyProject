import { Dimensions, StyleSheet } from "react-native"

const screenWidth = Dimensions.get('window').width;


export const globalStyles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0f172a'
    },
    subtitle:{
        fontSize: 25,
    },
    textGray:{
        color: '#0f172a'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 18,
        width: '100%'
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400'
    },
    btnPrimary: {
        backgroundColor: '#1c4c96',
    },
    btnSecondary: {
        backgroundColor: '#96661c'
    },
    inputLabel: {
        color: '#0f172a',
        fontSize: 10,
        textTransform: 'capitalize',
        opacity: 0.8,
        marginLeft: 3
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        paddingVertical: 10, 
        paddingRight: 10,
        opacity: 0.6,
        marginBottom: 12,
    },
    inputIcon:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    salutation: {
        color: '#0f172a',
        fontSize: 40,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 300,
        right: 0
    },
    salutationDos: {
        color: '#0f172a',
        fontSize: 25,
        fontWeight: '400',
        position: 'absolute',
        bottom: 250,
        right: 0,
        textAlign: 'right',
        width: screenWidth * 0.8
    },
    card: {
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 35,
        borderRadius: 8,
        width: '100%'
    }
});