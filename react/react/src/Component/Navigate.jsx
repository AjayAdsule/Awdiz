import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navigate = () => {
    const router=useNavigate();
    const Goto=()=>{
        router('/Single/Product/ajay')
    }

  return (
    <React.Fragment>
      <button onClick={Goto}>go to somewhere</button>
    </React.Fragment>
  )
}

export default Navigate
