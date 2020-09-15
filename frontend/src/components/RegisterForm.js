import React, { useState } from "react";
import './styles.css'

export default function RegisterForm() {
    const [formData, setData] = useState({
      password: '',
      username: '',
      email: '',
    })

  function handleSubmit (event) {
    event.preventDefault()
    console.log(formData)
    fetch('http://127.0.0.1:8000/api/User/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(formData => {
      console.log('Success:', formData);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  function handleChange (event) {
    const {name, value} = event.target
    setData({...formData, [name]: value})
  }

  return(
    <div className="form-group border border-primary rounded">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input autoComplete="off"
              className="form-control"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange} />
        <label htmlFor="email">Email: </label>
        <input autoComplete="off"
              className="form-control"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}></input>
        <label htmlFor="password">Password: </label>
        <input autoComplete="off"
              className="form-control"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}></input>
        <label htmlFor="matchword">Repeat Password: </label>
        <input autoComplete="off"
              className="form-control"
              type="password"
              name="matchword"
              value={formData.matchword}
              onChange={handleChange}></input>
        <br></br>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
    )
}