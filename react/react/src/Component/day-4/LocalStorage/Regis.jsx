import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Regis = () => {
  const router = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [user, setUsers] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name && data.email && data.password.length>8) {
      const newUser = { id: new Date().getTime().toString(), ...data };
      setUsers([...user, newUser]);
      localStorage.setItem("users", JSON.stringify(user));
      const allUsers = JSON.parse(localStorage.getItem("users"));
      setData({name:'',email:'',password:''})
      router('/login')
      console.log(allUsers);
    }
  };
  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password :</label>
            <input
              type="text"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </article>
    </React.Fragment>
  );
};

export default Regis;
