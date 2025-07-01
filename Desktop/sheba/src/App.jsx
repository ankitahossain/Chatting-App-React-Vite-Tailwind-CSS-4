import React from 'react'
import Navbar from './Components/Navbar'
import Button from './Components/Button'
import Banner from './Components/Banner'
import Categories from './Components/Categories'
import YourHome from './Components/YourHome'
import Recommended from './Components/Recommended'
import Gallery from './Components/Gallery'
import YourSafety from './Components/YourSafety'
import Works from './Components/Works'
import Feedback from './Components/Feedback'

const App = () => {
  return (
    <div>
      
      <Button />
      <Navbar />
      <Banner/>
      <Categories/>
      <YourHome/>
      <Recommended/>
      <Gallery/>
      <YourSafety/>
      <Works/>
      <Feedback/>
    </div>
  )
}

export default App
