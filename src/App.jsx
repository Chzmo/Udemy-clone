import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Container from './Container/Container'
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element = {<Container/>}/>
        <Route 
          path='/'
          element={
            <Container/>
          }
        >
          <Route path='/' element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
