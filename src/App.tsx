import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import WorkDetail from "./pages/WorkDetail";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="works/:slug" element={<WorkDetail />} />
        {/* Services now lives on the landing page */}
        <Route path="services" element={<Navigate to="/" replace />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
