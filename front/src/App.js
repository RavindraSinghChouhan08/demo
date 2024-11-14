import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar1 from './Navbar1';
import Home from './Home';
import Contact from './Contact';
import Practicefile from './Practicefile';


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     
     {/* <Navbar1 /> */}
     
     <Routes>

      {/* <Route path = '/' element = {<Home />}></Route>

      <Route path = '/Contact' element = {<Contact />}></Route> */}

      <Route path='/' element={<Practicefile />} />

     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
