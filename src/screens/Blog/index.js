/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {BlogContext} from '../../contexts/BlogContext';
import BlogItem from '../../components/BlogItem';
import styles from './styles/BlogStyles';

const BlogListScreen = ({navigation}) => {
  const {blogPosts, loading, updateBlogPosts} = useContext(BlogContext);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [isEndReached, setIsEndReached] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const onRefresh = useCallback(() => {
    if (!isFetchingMore) {
      setRefreshing(true);
      setPage(1);
      setIsEndReached(false);
      setIsFetchingMore(false);
    }
  }, [isFetchingMore]);

  const fetchBlogPosts = useCallback(async pageNumber => {
    try {
      const response = await fetch(
        `https://www.lenasoftware.com/api/v1/en/maestro/1?page=${pageNumber}&count=10`,
      );
      const data = await response.json();
      if (data && data.data) {
        if (pageNumber === 1) {
          updateBlogPosts(data.data);
        } else {
          updateBlogPosts(prevPosts => [...prevPosts, ...data.data]);
        }
        setIsEndReached(data.data.length === 0);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
      setIsFetchingMore(false);
    }
  }, []);

  const handleLoadMore = useCallback(() => {
    if (!loading && !isEndReached && !isFetchingMore) {
      setIsFetchingMore(true);
      setPage(prevPage => prevPage + 1);
    }
  }, [loading, isEndReached, isFetchingMore]);

  useEffect(() => {
    fetchBlogPosts(page);
  }, [page, fetchBlogPosts]);

  const renderBlogPost = useCallback(
    ({item}) => <BlogItem item={item} navigation={navigation} />,
    [navigation],
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={blogPosts}
          keyExtractor={item => item.postId.toString()}
          renderItem={renderBlogPost}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.01}
          horizontal={false}
          contentContainerStyle={styles.blogPostItemContainer}
          ListFooterComponent={
            isEndReached && !isFetchingMore ? (
              <Text style={styles.endText}>No more items</Text>
            ) : null
          }
        />
      )}
    </View>
  );
};

export default BlogListScreen;
