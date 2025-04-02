import React from 'react'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from './components/Landing';
import Signin from './components/Signin';
import Home from './components/Home';

const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route index element = {<Landing/>}/>
          <Route path='/home'element={<Home/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path='/signin' element={<Signin/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App;
