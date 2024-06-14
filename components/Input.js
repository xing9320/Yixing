import { TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
    return (
        <TextInput
            style={{ ...styles.input, ...props.style }}
            blurOnSumbit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;