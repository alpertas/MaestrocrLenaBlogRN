/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, RefreshControl, StyleSheet} from 'react-native';
import {BlogContext} from '../../contexts/BlogContext';
import BlogItem from '../../components/BlogItem';

const BlogListScreen = ({navigation}) => {
  const {blogPosts, loading, updateBlogPosts} = useContext(BlogContext);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    fetchBlogPosts();
    setRefreshing(false);
  };

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(
        'https://www.lenasoftware.com/api/v1/en/maestro/1',
      );
      const data = await response.json();
      updateBlogPosts(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderBlogPost = ({item}) => (
    <BlogItem item={item} navigation={navigation} />
  );

  useEffect(() => {
    const fetchPosts = async () => {
      await fetchBlogPosts();
    };

    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={blogPosts}
          keyExtractor={item => item.postId.toString()}
          renderItem={({item}) => renderBlogPost({item, navigation})}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          horizontal={false}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});

export default BlogListScreen;
