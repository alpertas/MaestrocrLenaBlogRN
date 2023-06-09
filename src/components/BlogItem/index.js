import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

// Styles
import styles from './styles/BlogItemStyles';

export default function BlogItem({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BlogContent', {postId: item.postId})}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            source={{uri: item.banner}}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.summary}</Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.readingTimer}>
            {Math.abs(item.totalReadingTime)} min read
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
