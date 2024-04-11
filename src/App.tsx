import { BrowserRouter as Router, Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import './global.css';

import Home from './pages/home';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>
           <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Signup" element={<SignUp />} />
             </Routes>
        </BrowserRouter>
     </>
  );
}

export default App;
