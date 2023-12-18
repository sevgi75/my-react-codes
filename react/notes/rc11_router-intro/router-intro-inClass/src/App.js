import { Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Nav />
      <Routes>
         <Home />
         <Instructors />
         <Contact />
         <NotFound />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
