import { useState } from "react";
import { Link as RouterLink } from "react-router";
import { Button, Paper, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function HomePage() {
  return (
    <Container maxWidth="md" sx={{ pt: "60px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "50px",
        }}
      >
        <Box>
          <Typography variant="h4">All Notes (3)</Typography>
        </Box>
        <Box sx={{ gap: "20px" }}>
          <FormControl sx={{ width: "150px", mr: "15px" }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="note_category_label"
              id="note_category"
              label="Category"
              defaultValue={"All"}
            >
              <MenuItem value={"All"}>All Categories</MenuItem>
              <MenuItem value={"Personal"}>Personal</MenuItem>
              <MenuItem value={"Work"}>Work</MenuItem>
              <MenuItem value={"Ideas"}>Ideas</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="note_category_label"
              id="note_sortby"
              label="sortby"
              defaultValue={"LastUpdated"}
            >
              <MenuItem value={"LastUpdated"}>Last Updated</MenuItem>
              <MenuItem value={"Title"}>Title</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Card xs={6} md={4} sx={{ minWidth: 270 }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 1 }}>
              note 1
            </Typography>
            <Chip label="Work" sx={{ mb: 1.5 }} />
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 1.5 }}
            >
              Jul 22, 2025 11.18 AM
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" component={RouterLink} to="/n:id">
              <CreateIcon sx={{ mr: "5px" }}></CreateIcon>
              EDIT
            </Button>
            <Button size="small" color="error">
              <DeleteIcon sx={{ mr: "5px" }}></DeleteIcon>
              DELETE
            </Button>
          </CardActions>
        </Card>

        <Card xs={6} md={4} sx={{ minWidth: 270 }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 1 }}>
              note 2
            </Typography>
            <Chip label="Work" sx={{ mb: 1.5 }} />
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 1.5 }}
            >
              Jul 22, 2025 11.18 AM
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" component={RouterLink} to="/n:id">
              <CreateIcon sx={{ mr: "5px" }}></CreateIcon>
              EDIT
            </Button>
            <Button size="small" color="error">
              <DeleteIcon sx={{ mr: "5px" }}></DeleteIcon>
              DELETE
            </Button>
          </CardActions>
        </Card>

        <Card xs={6} md={4} sx={{ minWidth: 270 }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 1 }}>
              note 3
            </Typography>
            <Chip label="Work" sx={{ mb: 1.5 }} />
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 1.5 }}
            >
              Jul 22, 2025 11.18 AM
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" component={RouterLink} to="/n:id">
              <CreateIcon sx={{ mr: "5px" }}></CreateIcon>
              EDIT
            </Button>
            <Button size="small" color="error">
              <DeleteIcon sx={{ mr: "5px" }}></DeleteIcon>
              DELETE
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", top: "655px", right: "20px" }}
        component={RouterLink}
        to="/add"
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}

export default HomePage;
