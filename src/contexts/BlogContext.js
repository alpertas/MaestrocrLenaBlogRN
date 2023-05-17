import React, {createContext, useState, useEffect} from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({children}) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(
        'https://www.lenasoftware.com/api/v1/en/maestro/1',
      );
      const data = await response.json();
      setBlogPosts(data.result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogPosts,
        loading,
        updateBlogPosts: setBlogPosts,
      }}>
      {children}
    </BlogContext.Provider>
  );
};
