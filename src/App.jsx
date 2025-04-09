import React from 'react'
import Signup from './Pages/Signup'
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from './Pages/Landing';
import Signin from './Pages/Signin';
import Home from './Pages/Home';
import RootLayout from './RootLayout/RootLayout';
import Messages from './components/Messages';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/' element={<RootLayout />}>
            <Route path='/home' element={<Home />} />
            <Route path='/messages' element={<Messages/>}/>
            
            <Route path='/settings' element="This is the settings page" />
            <Route path='/notifications' element="This is the notifications page" />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
