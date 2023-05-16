import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

// Screens
import {Blog, BlogContent} from './src/screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Blog" component={Blog} />
        <Stack.Screen name="BlogContent" component={BlogContent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
