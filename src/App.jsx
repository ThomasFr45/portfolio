import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Projects from './components/Projects';
import Contact from './components/Contact';
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <HashRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<Detail />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
