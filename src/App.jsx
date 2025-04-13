import React from 'react'
import { BrowserRouter as Router,Routes,Route, useLocation } from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
