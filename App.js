import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text>Alper</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
