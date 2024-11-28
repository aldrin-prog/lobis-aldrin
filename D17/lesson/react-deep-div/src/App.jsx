import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import FormExample from './pages/FormExample';
function App() {
  return (
    <div>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/form" element={<FormExample/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
