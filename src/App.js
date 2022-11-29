// import React from 'react';
// import Navbar from "./components/Navbar";
// import './App.css';
// import { Routes, Route } from "react-router-dom";
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';
// // import Home from './Components/pages/Home';
// import Home from './Components/pages/Home';


// function App() {
//   return (
//     <>

//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/services' element={<Services/>} />
//           <Route path='/products' element={<Products/>} />
//           <Route path='/sign-up' element={<SignUp/>} />
//         </Routes>

//     </>
//   );
// }

// export default App;

import React from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>

        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>

    </>
  );
}

export default App;
