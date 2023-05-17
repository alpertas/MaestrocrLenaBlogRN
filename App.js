import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import {BlogProvider} from './src/contexts/BlogContext';

// Screens
import {Blog, BlogContent} from './src/screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <BlogProvider>
        <Stack.Navigator initialRouteName="Blog">
          <Stack.Screen name="Blog" component={Blog} />
          <Stack.Screen name="BlogContent" component={BlogContent} />
        </Stack.Navigator>
      </BlogProvider>
    </NavigationContainer>
  );
}

export default App;
