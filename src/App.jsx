import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import AddNewPage from "./pages/AddNewPage";
import CategoriesPage from "./pages/CategoriesPage";
import EditPage from "./pages/EditPage";

/*
Routes:
All Notes = /
Add Note = /add
Categories = /categories
*/

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddNewPage />} />
        <Route path="/n:id" element={<EditPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
