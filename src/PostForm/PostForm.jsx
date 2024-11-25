import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/post/postSlice";

const PostForm = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postCaption, setPostCaption] = useState("");
  const dispatch = useDispatch();


  const addPostHandler = () => {
    dispatch(addPost({ title: postTitle, caption: postCaption }));
    setPostTitle("");
    setPostCaption("");
  };

  return (
    <div className="form-wrapper">
      <h2>Share a New Post</h2>
      <TextField
        className="txt-area"
        value={postTitle}
        id="outlined-multiline-static"
        label="Title"
        variant="filled"
        sx={{
          margin: "1rem",
        }}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <TextField
        className="txt-area"
        value={postCaption}
        id="outlined-multiline-static"
        label="Caption"
        multiline
        rows={6}
        variant="filled"
        onChange={(e) => setPostCaption(e.target.value)}
      />
      <Button
        className="submitFormBtn"
        variant="contained"
        sx={{ marginTop: "1rem", marginBottom: "1rem" }}
        onClick={() => addPostHandler()}
      >
      Share
        {/* {isLoading ? "Loading..." : "Share"} */}
      </Button>
    </div>
  );
};

export default PostForm;
