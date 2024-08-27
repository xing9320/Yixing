import React from 'react'
import {View, StyleSheet} from 'react-native'
import TitleText from './TitleText';
import colors from '../constants/colors';

const Header = props => {
    return (
        <View style = {styles.header}>
            <TitleText style = {styles.headerTitile}>{props.title}</TitleText>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitile: {
        color: 'black',
        fontSize: 18
    }
});

export default Header;