import React from 'react'
import { useParams } from 'react-router-dom'
const SingleProduct = () => {
    const Data=useParams()
    console.log(Data,'data-here');
  return (
    <React.Fragment>
      {Data && Data.ajay}
    </React.Fragment>
  )
}

export default SingleProduct
