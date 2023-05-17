import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import {BlogProvider} from './src/contexts/BlogContext';

// Screens
import {Blog, BlogContent, NoInternet} from './src/screens';

// Utils
import {ConnectionChecker} from './src/utils/ConnectionChecker';

const Stack = createStackNavigator();

function App() {
  const [isConnected, setIsConnected] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkConnectivity = async () => {
      const isConnected = await ConnectionChecker();
      setIsConnected(isConnected);
      setLoading(false);
    };

    checkConnectivity();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <BlogProvider>
        <Stack.Navigator initialRouteName={isConnected ? 'Blog' : 'NoInternet'}>
          <Stack.Screen
            name="Blog"
            component={Blog}
            options={{headerLeft: null}}
          />
          <Stack.Screen name="BlogContent" component={BlogContent} />
          <Stack.Screen
            name="NoInternet"
            component={NoInternet}
            options={{title: 'Connection Problem'}}
          />
        </Stack.Navigator>
      </BlogProvider>
    </NavigationContainer>
  );
}

export default App;
