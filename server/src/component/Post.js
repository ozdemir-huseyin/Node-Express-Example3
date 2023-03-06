import React from "react";

function Post({ post }) {
  return (
    <div className="Post">
      <h1 className="Post-title">Posts</h1>
      {post.map((item) => (
        <div className="post-map" key={item.id}>
          <div className="post-context-container">
            <p className="Post-number">{item.createdAt}</p>
            <h4 className="Post-context-title">{item.title}</h4>
            <p className="Post-context">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Post;
