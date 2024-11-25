import React from "react";
import { useSelector } from "react-redux";

const PostList = () => {
  const isLoading = useSelector((state) => state.post.loading);
  const AllPosts = useSelector((state) => state.post.posts);
  return (
    <div>
      <br />
      <hr />
      <div className="cardContainer">
        {AllPosts.length === 0 && <h3>There is no post to show !</h3>}
        {isLoading && <h3>Loading Posts...</h3>}
        {AllPosts.map(post=>(
            <div className="card">
                <h2>{post.title}</h2>
                <p>{post.caption}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
