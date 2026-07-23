import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";

import ProjectList from "./projects/ProjectList";
import AddProject from "./projects/AddProject";
import EditProject from "./projects/EditProject";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/projects" element={<ProjectList />} />

        <Route path="/projects/add" element={<AddProject />} />

        <Route path="/projects/edit/:id" element={<EditProject />} />

      </Routes>

    </Router>
  );
}

export default App;