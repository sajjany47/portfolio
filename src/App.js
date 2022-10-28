import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './component/Navbar';

function App() {
  return (
    <div >
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
