import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Container from './Container/Container'
import Home from './Pages/Home';
import Search from './Pages/Search/Search';
import PaidCourses from './Pages/PaidCources/PaidCourses';

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
          <Route path='/paid-course/:courseName' element={<PaidCourses />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
