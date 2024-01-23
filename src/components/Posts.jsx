import { useEffect, useState } from 'react';
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((err) => console.log(err.message));
  }, []);

  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
