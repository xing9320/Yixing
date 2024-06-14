import { useState } from 'react';
import { View, Text, StyleSheet, Button, Keyboard, TouchableWithoutFeedback } from 'react-native'
import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputhandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text style={styles.title}>The Game Screen!</Text>
                <Card style={styles.inputContainer}>
                    <View style={styles.inputContainer}>
                        <Text>Select a Number</Text>
                        <Input style={styles.input} onChangeText={numberInputhandler} value={enteredValue} />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title="Reset" onPress={() => { }} color={colors.accent} />
                            </View>
                            <View style={styles.button}>
                                <Button title="Confirm" onPress={() => { }} color={colors.primary} />
                            </View>
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    button: {
        width: 90
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
});

export default StartGameScreen;