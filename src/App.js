import logo from './logo.svg';
import './App.css';
import Nav from './Components/Header/Nav';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Type from './Components/Typewriter/Type';
import Scroll from './TestScroll/Scroll';
import { Route, Routes } from 'react-router-dom';
import Hydra from './Hydra/Hydra';
import Home from './Components/Home/Home';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home></Home> } ></Route>
        <Route path='/hydra' element={<Hydra></Hydra>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
