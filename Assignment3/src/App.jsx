import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";

import ProjectList from "./projects/ProjectList";
import AddProject from "./projects/AddProject";
import EditProject from "./projects/EditProject";

import ServiceList from "./services/ServiceList";
import AddService from "./services/AddService";
import EditService from "./services/EditService";

import ReferenceList from "./references/ReferenceList";
import AddReference from "./references/AddReference";
import EditReference from "./references/EditReference";


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

        <Route path="/services" element={<ServiceList />} />

        <Route path="/services/add" element={<AddService />} />

        <Route path="/services/edit/:id" element={<EditService />} />

        <Route path="/references" element={<ReferenceList />} />

        <Route path="/references/add" element={<AddReference />} />

        <Route path="/references/edit/:id" element={<EditReference />} />

      </Routes>

    </Router>
  );
}

export default App;