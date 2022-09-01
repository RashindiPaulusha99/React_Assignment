import React from "react";
import {Routes, Route} from "react-router-dom";
import NotFoundIndex from "../pages/sessions/NotFoundIndex";
import Customer from "../pages/sessions/Customer";
import Item from "../pages/sessions/Item";

function App() {
  return (
      <Routes>
        {/*<Route exact path='/' element={<Login/>}/>*/}
        <Route path='customer' element={<Customer/>}/>
        <Route path='item' element={<Item/>}/>
        {/*<Route path='dash' element={<Product/>}/>*/}
        <Route path='*' element={<NotFoundIndex/>}/>
      </Routes>
  );
}

export default App;
