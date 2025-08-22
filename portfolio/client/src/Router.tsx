// src/Router.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} /> {/* Add Projects route */}
      <Route path="/contact" element={<Contact />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}