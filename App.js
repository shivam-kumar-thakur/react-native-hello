import React, { useState } from 'react';
import { StatusBar, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');
  const [counter, setCounter] = useState(0);

  const handleButtonClick = () => {
    setMessage('Hello User');
    setCounter(prevCounter => prevCounter + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, it's me Shivam 22BPS1014</Text>
      <Button title="Click me" onPress={handleButtonClick} />
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E5E8', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  counter: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
  },
});
