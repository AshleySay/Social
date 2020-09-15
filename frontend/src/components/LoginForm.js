import React, { useState } from "react";
import './styles.css'

//Login form with Bounce on submit logic.
function LoginForm() {
    //const [loc, setLoc] = useState(false);
    const [formData, setData] = useState({
      password: '',
      username: '',
    })



  // const bounceOut = useSpring({
  //     from: { opacity: 1,
  //             transform: 'translateY(0%)'
  //         },
  //     to: {opacity: loc ? 0 : 1,
  //         transform: loc ? 'translateY(-500px)' : 'translateY(0%)'}
  // })

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
            <label htmlFor="password">Password: </label>
            <input autoComplete="off"
                  className="form-control"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}></input>
            <br></br>
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
    )

}

export default LoginForm