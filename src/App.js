import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Componets/Navbar/Navbar';
import SignUp from './Componets/SignUp/SignUp';
import LogIn from './Componets/LogIn/LogIn';
import Shop from './Componets/Shop/Shop';
import RequireAuth from './Componets/RequireAuth/RequireAuth';
import Inventory from './Componets/Inventory/Inventory';
import Review from './Componets/Review/Review';
import NoMatch from './Componets/NoMatch';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/match' element={
          <RequireAuth>
            <NoMatch></NoMatch>
          </RequireAuth>
        }></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
      </Routes >
    </BrowserRouter >
  );
};

export default App;