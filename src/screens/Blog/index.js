import {View, Text} from 'react-native';
import React from 'react';

// Styles
import styles from './styles/BlogStyles';

// Components
import BlogItem from '../../components/BlogItem';

export default function Blog() {
  return (
    <View style={styles.container}>
      <BlogItem />
    </View>
  );
}
