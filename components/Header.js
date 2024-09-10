import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import TitleText from './TitleText';
import colors from '../constants/colors';

const Header = props => {
    return (
        <View
            style={{
                ...styles.headerBase,
                ...Platform.select({
                    ios: styles.headerIos,
                    android: styles.headerAndroid
                })
            }}
        >
            <TitleText style={styles.headerTitile}>{props.title}</TitleText>
        </View>
    );
}

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerIos: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: colors.primary
    },
    headerTitile: {
        color: Platform.OS === 'ios' ? colors.primary : 'white',
        fontSize: 18
    }
});

export default Header;