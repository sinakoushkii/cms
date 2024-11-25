import { Button, TextField } from "@mui/material";
import React from "react";

const PostForm = () => {
  return (
    <div className="form-wrapper">
      <h2>Share a New Post</h2>
      <TextField
        className="txt-area"
        id="outlined-multiline-static"
        label="Title"
        variant="filled"
        sx={{
          margin: "1rem",
        }}
      />
      <TextField
        className="txt-area"
        id="outlined-multiline-static"
        label="Caption"
        multiline
        rows={6}
        variant="filled"
      />
      <Button
        className="submitFormBtn"
        variant="contained"
        sx={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        Share
      </Button>
    </div>
  );
};

export default PostForm;
