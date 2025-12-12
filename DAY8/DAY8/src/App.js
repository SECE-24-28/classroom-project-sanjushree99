import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <h1>I am from app</h1>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
