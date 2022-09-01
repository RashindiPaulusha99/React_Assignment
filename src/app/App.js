import React from "react";
import {Routes, Route} from "react-router-dom";
import NotFoundIndex from "../pages/sessions/NotFoundIndex";

function App() {
  return (
      <Routes>
        {/*<Route exact path='/' element={<Login/>}/>*/}
        <Route path='customer' element={<customer/>}/>
        {/*<Route path='item' element={<Register/>}/>
        <Route path='dash' element={<Product/>}/>*/}
        <Route path='*' element={<NotFoundIndex/>}/>
      </Routes>
  );
}

export default App;
