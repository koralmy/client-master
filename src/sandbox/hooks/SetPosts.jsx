import React, { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const SetPost = () => {
  const INITIAL_POST = {
    title: "",
    subtitle: "",
    author: "",
  };

  const [post, setPost] = useState(INITIAL_POST);
  const [posts, setPosts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = () => {
    setPosts([...posts, post]);
    setPost(INITIAL_POST);
    setPosts([
      ...posts,
      { ...post, createdAt: new Date().toLocaleString() },
    ]);

  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <TextField
          style={{ marginBottom: "10px" }}
          type="text"
          name="title"
          value={post.title}
          onChange={handleInputChange}
          label="Title"
        />
        <TextField
          style={{ marginBottom: "10px" }}
          type="text"
          name="subtitle"
          value={post.subtitle}
          onChange={handleInputChange}
          label="Subtitle"
        />
        <TextField
          style={{ marginBottom: "10px" }}
          type="text"
          name="author"
          value={post.author}
          onChange={handleInputChange}
          label="Author"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add Post
        </Button>
      </form>
      {posts.length > 0 && (
        <TableContainer
          component={Paper}
          style={{ width: "100%", marginTop: "20px" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Subtitle</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((p, index) => (
                <TableRow key={index}>
                  <TableCell>{p.title}</TableCell>
                  <TableCell>{p.subtitle}</TableCell>
                  <TableCell>{p.author}</TableCell>
                  <TableCell>{p.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default SetPost;
