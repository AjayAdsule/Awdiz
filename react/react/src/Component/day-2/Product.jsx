import React from 'react'
import { useParams } from 'react-router-dom'
const Product = () => {
    const Data=useParams()
    console.log(Data);
  return (
    <React.Fragment>
      <h1>This is single product page</h1>
    </React.Fragment>
  )
}

export default Product
