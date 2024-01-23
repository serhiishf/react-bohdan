import './Post.css';

function Post({ title, body, id, userId }) {
  return (
    <div className="post">
      <h1>{title}</h1>
      <h2>{id}</h2>
      <p>{body}</p>
      <h3>User id: {userId}</h3>
    </div>
  );
}

export default Post;
