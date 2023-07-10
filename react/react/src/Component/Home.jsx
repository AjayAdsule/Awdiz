import React from 'react'
import { useNavigate  } from 'react-router-dom'

const Home = () => {
    const router=useNavigate()
    const handleNavigate=()=>{
        router('./navigate')
    }
    const handleHome=()=>{
        router('/')
    }
    
  return (
    <React.Fragment>
      <h1>Home page</h1>
      <button onClick={handleNavigate}>Go to single</button> <br />
      <button onClick={handleHome}>Home</button><br />
      <button>Navigate</button>
    </React.Fragment>
  )
}

export default Home
