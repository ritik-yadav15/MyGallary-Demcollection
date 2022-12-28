import Navbar from './components/Navbar'
import './App.css';
import Home from './components/Home'
import Collection from './components/Collection';
import { Routes,Route } from "react-router-dom";
import About from './components/About'
import Footer from './Footer';
import Contact from './components/Contact';

function App() {

  

  return (
   <>

  <Navbar/>
  <Routes>
       

 
   {/* <Home/> */}
  {/* <Collection/> */}
  <Route eaxct path="/" element={<Home/>} />
  <Route eaxct path="/Home" element={<Home/>} />
  <Route eaxct path="/Collection" element={<Collection/>} />
  <Route eaxct path="/About" element={<About/>} />
  <Route eaxct path="/Contact" element={<Contact/>} />

     </Routes>
     <Footer/>


   </>
  );
}

export default App;
