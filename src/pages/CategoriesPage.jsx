import { useState } from "react";
import { Link as RouterLink } from "react-router";
import {
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function CategoriesPage() {
  return (
    <Container maxWidth="md" sx={{ pt: "60px" }}>
      <Typography variant="h4">Manage Categories</Typography>
      <Paper elevation={3} sx={{ p: "30px", mt: "20px", mb: "20px" }}>
        <Typography variant="h6" sx={{ mb: "10px" }}>
          Add New Category
        </Typography>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <TextField
            fullWidth
            id="note_title"
            label="Category Name"
            variant="outlined"
          />
          <Button color="primary" variant="contained">
            ADD
          </Button>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: "30px", mt: "10px", mb: "40px" }}>
        <Typography variant="h6" sx={{ mb: "10px" }}>
          Existing Categories (3)
        </Typography>
        <List aria-label="mailbox folders">
          <ListItem>
            <ListItemText primary="Personal" />
            <Box>
              <IconButton>
                <CreateIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Work" />
            <Box>
              <IconButton>
                <CreateIcon />
              </IconButton>
              <IconButton disabled>
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Ideas" />
            <Box>
              <IconButton>
                <CreateIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
          <Divider component="li" />
        </List>
      </Paper>
    </Container>
  );
}

export default CategoriesPage;
