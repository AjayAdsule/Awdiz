import React from 'react'
import { useNavigate } from 'react-router-dom'
const Demo = () => {
    const router=useNavigate();
    const GoTo=()=>{
        router('/single-product/:2000')
    }
  return (
    <React.Fragment>
      <h1>This is demo component</h1>
      <button onClick={GoTo}>Go to product section</button>
    </React.Fragment>
  )
}

export default Demo
