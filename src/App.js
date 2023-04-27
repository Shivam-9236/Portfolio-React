import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home"
import Work from "./components/Work.jsx"
import Timeline from "./components/Timeline.jsx"
import Services from "./components/Services.jsx"
import Testimonial from "./components/Testimonial.jsx"
import Contact from "./components/Contact.jsx"
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer"
import { useState } from "react";




function App() {

  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <>
    <HeaderPhone menuOpen={menuOpen} />
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Home/>
    <Work/>
    <Timeline/>
    <Services/>
    <Testimonial/>
    <Contact/>
    <Toaster/>
    <Footer/>

 
    </>
  
  );
}

export default App;
