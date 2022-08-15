import logo from './logo.svg';
import './App.css';
import Nav from './Components/Header/Nav';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';




function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <div className='mt-[120px]'>
        <Features></Features>
      </div>
      <div className='mt-[50px]'>
        <About></About>
      </div>
      <div>
        <Gallery></Gallery>
      </div>

    </div>
  );
}

export default App;
