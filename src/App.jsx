import About from "./routes/About"
import Contact from "./routes/Contact"
import Home from "./routes/Home"
import Project from "./routes/Project"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import "./index.css"

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default App
