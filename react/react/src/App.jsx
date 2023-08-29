import React from "react";
import Map from "./Component/Map";
import { Routes, Route } from "react-router-dom";
import Navigate from "./Component/Navigate";
import SingleProduct from "./Component/SingleProduct";
import Home from "./Component/Home";
import Demo from "./Component/day-2/Demo";
import Product from "./Component/day-2/Product";
import MultipleForms from "./Component/day-3/MultipleForms";
import Todo from "./Component/day-3/Todo";
import UseMemo from "./Component/day-4/UseMemo";
import Regis from "./Component/day-4/LocalStorage/Regis";
import Login from "./Component/day-4/LocalStorage/Login";
import Register from "./Component/Login/Register";
import ProductsFromBackend from "./Component/day-2/ProductsFromBackend";
import CountDown from "./CountDown/CountDown";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/navigate" element={<Navigate />} />
        <Route exact path="/single" element={<SingleProduct />} />
        <Route exact path="/demo" element={<Demo />} />
        <Route exact path="/forms" element={<MultipleForms />} />
        <Route exact path="/todo" element={<Todo />} />
        <Route exact path="/memo" element={<UseMemo />} />
        <Route exact path="/register" element={<Regis />} />
        <Route exact path="/register1" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/products-from-backend"
          element={<ProductsFromBackend />}
        />
        <Route exact path="/product/:id" element={<Product />} />
        <CountDown time={30} direction={'clockwise'} callBack={()=>console.log('CountDown has completed')}/>
      </Routes>
    </React.Fragment>
  );
};

export default App;
