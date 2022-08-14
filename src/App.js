import logo from './logo.svg';
import './App.css';
import Nav from './Components/Header/Nav';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';




function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <Features></Features>
    </div>
  );
}

export default App;
