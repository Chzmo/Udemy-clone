import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Container from './Container/Container'
import Home from './Pages/Home';
import Search from './Pages/Search/Search';

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
          <Route path='/search/:searchTerm' element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
