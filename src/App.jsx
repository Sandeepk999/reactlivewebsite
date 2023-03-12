import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Users from"./Components/Users"
import Createusers from"./Components/Createusers"
import Editusers from"./Components/Editusers"

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Homepage/>
      <Routes>
        <Route path="/" element={<Createusers/>}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/edit/:index" element={<Editusers/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
