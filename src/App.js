import './App.css';
import Footer from './components/Footer';
import About from './components/landingPage/About';
import Covidsection from './components/landingPage/Covidsection';
import Herosection from './components/landingPage/Herosection';
import Talk from './components/landingPage/Talk';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Talk/>
      <Covidsection/>
      <Herosection/>
      <Footer/>
    </div>
  );
}

export default App;
