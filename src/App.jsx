import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery"
import Skills from "./pages/Skills"
import Certificates from "./pages/Certification"
import Blog from "./pages/Blog"
import Resume from "./pages/Resume"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    
   <div className="font-poppins">
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
      
    </div>
  )
}

export default App