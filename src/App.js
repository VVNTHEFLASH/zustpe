import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Feedback from './components/Feedback';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <>
    <HashRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
      </Routes>
    </div>
    </HashRouter>
    </>
  );
}

export default App;
