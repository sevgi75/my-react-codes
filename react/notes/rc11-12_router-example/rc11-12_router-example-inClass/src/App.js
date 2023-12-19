import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import Paths from "./pages/Paths";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Fullstack from "./pages/Fullstack";
import Aws from "./pages/Aws";
import Frontend from "./pages/Frontend";


function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/people" element={<People />} />       
        <Route path="/people/:idx" element={<PersonDetail />} />       
        <Route path="/contact" element={<Contact />} />

        <Route path="/paths" element={<Paths />}>
          <Route path="fs" element={<Fullstack />}>
            <Route path="frontend" element={<Frontend />} />
            {/* <Route path="backend" element={<Backend />} /> */}
          </Route>
          <Route index path="" element={<Aws />} />
        </Route>

        <Route path="*" element={<NotFound />} />     
      </Routes>      
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
