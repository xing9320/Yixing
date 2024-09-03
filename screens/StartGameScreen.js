import React, { useState } from 'react';
import { View, StyleSheet, Button, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer'
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';


const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    //const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    const numberInputhandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    // useEffect(() => {
    //     const updateLayout = () => {
    //         setButtonWidth(Dimensions.get('window').width / 4);
    //     };
    //     const subscription = Dimensions.addEventListener('change', updateLayout);
    //     return () => subscription?.remove();
    // });

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <BodyText>Chosen Number:</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton title="START GAME" onPress={() => props.onStartGame(selectedNumber)}>
                    START GAME
                </MainButton>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a New Game!</TitleText>
                <Card style={styles.inputContainer}>
                    <View style={styles.inputContainer}>
                        <BodyText>Select a Number</BodyText>
                        <Input style={styles.input} onChangeText={inputText => numberInputhandler(inputText)} defaultValue={enteredValue} />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title="Reset" onPress={resetInputHandler} color={colors.accent} />
                            </View>
                            <View style={styles.button}>
                                <Button title="Confirm" onPress={confirmInputHandler} color={colors.primary} />
                            </View>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
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
        fontFamily: 'open-sans-bold'
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
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;