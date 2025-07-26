import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router";
import Contact from './pages/Contact';
import AboutPage from './pages/AboutPage';


createRoot(document.getElementById('root')).render(

 <BrowserRouter>
        <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>

  </BrowserRouter>,
)
