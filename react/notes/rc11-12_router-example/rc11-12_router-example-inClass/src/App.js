import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import Paths from "./pages/Paths";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";


function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/people" element={<People />} />       
        <Route path="/people/:idx" element={<PersonDetail />} />       
        <Route path="/contact" element={<Contact />} />       
        <Route path="/paths" element={<Paths />} />     
        <Route path="*" element={<NotFound />} />     
      </Routes>      
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
