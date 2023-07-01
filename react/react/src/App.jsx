import React from 'react'
import Map from './Component/Map'
import { Routes,Route } from 'react-router-dom'
import Navigate from './Component/Navigate'
import SingleProduct from './SingleProduct'

const App = () => {
  return (
    <React.Fragment>
     <Routes>
      <Route exact path='/map' element={<Map/>}/>
      <Route exact path='/navigate' element={<Navigate/>}/>
      <Route exact path='/single/:ajay' element={<SingleProduct/>}/>
     </Routes>
    </React.Fragment>
  )
}

export default App
