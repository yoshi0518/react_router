import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsIndex = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.id}:{post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsIndex;
