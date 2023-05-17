import {View, Text, useWindowDimensions} from 'react-native';
import React, {useContext} from 'react';
import {BlogContext} from '../../contexts/BlogContext';
import {ScrollView} from 'react-native-gesture-handler';
import HTML from 'react-native-render-html';

// Styles
import styles from './styles/BlogContentStyles';

export default function BlogContent({route}) {
  const {blogPosts} = useContext(BlogContext);
  const {postId} = route.params;
  const blogPost = blogPosts.find(post => post.postId === postId);

  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*<Text>{blogPost.title}</Text>*/}
        <HTML contentWidth={width} source={{html: blogPost.content}} />
      </ScrollView>
    </View>
  );
}
