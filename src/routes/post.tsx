import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [postId]);

  return (
    <>
      <h2>Single Post</h2>
      {post && (
        <div>
          <p>{post.userId}</p>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
};

export default Post;
