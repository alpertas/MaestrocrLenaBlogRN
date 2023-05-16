import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

// Styles
import styles from './styles/BlogItemStyles';

export default function BlogItem() {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image
          source={{uri: 'https://source.unsplash.com/600x400/?computer'}}
          style={styles.cardImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.title}>What's new in 2022 Tech</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
          atque quidem!
        </Text>
      </View>
      <View style={styles.cardFooter}>
        <Text>estimate time</Text>
      </View>
    </View>
  );
}
