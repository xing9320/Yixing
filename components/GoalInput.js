import React, {useState} from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputhandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }
    return (
        <View style={styles.title}>
        <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInputhandler} value= {enteredGoal} />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)}></Button>
      </View>
    );
};

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1
      }
});

export default GoalInput;