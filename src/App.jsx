import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
function App() {

  return (
    <Router>
      <div className='app'> 
         <Routes>
         <Route path="/checkout" element={
          <>
           <Header/>
           <Checkout/>
          </>
          } /> 
         <Route path="/login" element={ 
          <>
          <Login/>
         </>
         } /> 
         <Route path="/" element={
                <>  
                <Header/>
                <Home/>
                </>
              }/> 
         <Route path="/*" element={<h1>Error 404 Page Note found</h1>} /> 
         </Routes>
      </div>
    </Router>
  )
}

export default App
