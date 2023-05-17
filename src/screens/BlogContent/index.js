import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {BlogContext} from '../../contexts/BlogContext';

// Styles
import styles from './styles/BlogContentStyles';

export default function BlogContent({route}) {
  const {blogPosts} = useContext(BlogContext);
  const {postId} = route.params;
  const blogPost = blogPosts.find(post => post.postId === postId);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}
