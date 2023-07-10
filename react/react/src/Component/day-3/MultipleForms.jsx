import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MultipleForms = () => {
    const router=useNavigate()
  const [person,setPerson] = useState({
    name:'',
    email:'',
    password:''
  })
  const [people,setPeople]=useState([])
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const newPerson={id:new Date().getTime().toString(),...person}
    setPeople([...people,newPerson])
    console.log(people);
    setPerson({name:'',email:'',password:''})
    if(!person.name) return alert('enter name');
    if(!person.email) return alert('enter email');
    if(!person.email) return alert('enter password');
    alert('Registration Successfull...')
    router('/');
  }
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setPerson({...person,[name]:value})
    console.log(person);
  }
  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name :</label>
            <input type="text" name="name" id="name" value={person.name}  onChange={handleChange} /> 
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input type="text" name="email" id="email" value={person.email} onChange={handleChange}/>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password :</label>
            <input type="text" name="password" id="password" value={person.password} onChange={handleChange}/>
          </div>
          <button className="btn">Submit</button>
        </form>
      </article>
    </React.Fragment>
  );
};

export default MultipleForms;
