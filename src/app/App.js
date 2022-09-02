import React from "react";
import {Routes, Route} from "react-router-dom";
import NotFoundIndex from "../pages/sessions/NotFoundIndex";
import Customer from "../pages/sessions/Customer";
import Item from "../pages/sessions/Item";
import DashBoard from "../pages/sessions/DashBoard";

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<DashBoard/>}/>
        <Route path='customer' element={<Customer/>}/>
        <Route path='item' element={<Item/>}/>
        <Route path='dash' element={<DashBoard/>}/>
        <Route path='*' element={<NotFoundIndex/>}/>
      </Routes>
  );
}

export default App;
