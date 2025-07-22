import { useState } from "react";
import { Link as RouterLink } from "react-router";
import { Button, Paper, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Editor from "react-simple-wysiwyg";

function AddNewPage() {
  // rule for form fields : one state for one field
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  //   function onChange(event) {
  //     setContent(event.target.value);
  //   }
  return (
    <Container maxWidth="md" sx={{ pt: "60px" }}>
      <Typography variant="h4">Add New Note</Typography>
      <Paper elevation={3} sx={{ p: "30px", mt: "20px", mb: "40px" }}>
        <TextField
          fullWidth
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          id="note_title"
          label="Title"
          variant="outlined"
        />
        <FormControl sx={{ mt: "25px" }} fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="note_category_label"
            id="note_category"
            label="Category"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            <MenuItem value={"Personal"}>Personal</MenuItem>
            <MenuItem value={"Work"}>Work</MenuItem>
            <MenuItem value={"Ideas"}>Ideas</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ mt: "25px" }}>
          <Typography variant="body2" sx={{ mb: "10px" }}>
            Content
          </Typography>
          <Editor
            containerProps={{ style: { height: "350px" } }}
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            mt: "20px",
          }}
        >
          <Button color="primary" variant="contained">
            Save Note
          </Button>
          <Button component={RouterLink} to="/" variant="outlined">
            Cancel
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default AddNewPage;
