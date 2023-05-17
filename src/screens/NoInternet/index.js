import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles/NoInternetStyles';

import {ConnectionChecker} from '../../utils/ConnectionChecker';

export default function NoInternet({navigation}) {
  const checkConnection = async () => {
    const isConnected = await ConnectionChecker();
    if (isConnected) {
      navigation.navigate('Blog');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Internet</Text>
      <Text>Please check your internet connection and try again.</Text>
      <TouchableOpacity
        style={styles.checkConnectionButtonContainer}
        onPress={checkConnection}>
        <Text style={styles.checkConnectionText}>Try again</Text>
      </TouchableOpacity>
    </View>
  );
}
