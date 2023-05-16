import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Contact from './components/Contact';
import About from './components/About';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homs from './components/Homs';
import Histogram from './components/Histogram';

function App() {
  return (
     <Router>
    <div className="App">
    <Navbar />

      <Routes >
     <Route className='hs' path='/' element={<Homs/>} />
<Route path='/histogram' element={<Histogram/>}/>
<Route path='/TinyTalesProject' element={<Homs/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/about' element={<About/>}/>
      </Routes>
     
     <Footer className='ft' />
    </div>
     </Router>
  );
}

export default App;
