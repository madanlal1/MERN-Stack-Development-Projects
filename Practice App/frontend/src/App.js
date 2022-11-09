import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signin from './Components/Signin';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Products from './Components/Products';
import Update from './Components/Update';
import ProtectedRoute from './Components/ProtectedRoute';
function App() {
   return<>
      <Router>
         <Navbar/>
         <Routes>
            <Route element={<ProtectedRoute />}>
               <Route path='/' element={<Home />} />
               <Route path='/products' element={<Products />} />
               <Route path='/update/:id' element={< Update/>} />
            </Route>
               <Route path='/signup' element={<Signup />} />
               <Route path='/signin' element={<Signin />} />
         </Routes>
      </Router>
      
   </>
}

export default App;
