//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }])
  };
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal= {addGoalHandler}/>
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={() => console.log("test")} title = { itemData.item.value}/>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  }
  
  
});
