import React from 'react'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from "react-router";

import Signin from './components/Signin';

const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path='/signin' element={<Signin/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App;
