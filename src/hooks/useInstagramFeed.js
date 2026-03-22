import { useState, useEffect } from 'react';
import { mockFeedPosts } from '../data/instagramMock';

const IG_USER_ID = '8612841073';

export function useInstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = import.meta.env.VITE_IG_ACCESS_TOKEN;

    if (token) {
      // Real Instagram Graph API
      const url = `https://graph.instagram.com/${IG_USER_ID}/media?fields=id,caption,media_url,permalink,timestamp,like_count&access_token=${token}&limit=6`;
      fetch(url)
        .then(r => r.json())
        .then(data => {
          if (data.data) {
            setPosts(data.data);
          } else {
            setPosts(mockFeedPosts);
          }
        })
        .catch(() => setPosts(mockFeedPosts))
        .finally(() => setLoading(false));
    } else {
      // Fallback to mock
      setTimeout(() => {
        setPosts(mockFeedPosts);
        setLoading(false);
      }, 600);
    }
  }, []);

  return { posts, loading };
}
