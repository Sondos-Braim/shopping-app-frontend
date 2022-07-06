import React, { useState } from 'react';
import  axios  from '../../axios';
import { toast, ToastContainer } from 'react-toastify';

export default function Login(props) {
  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    async function loginUser(event) {
      event.preventDefault()
      try {
        const response = await axios.post('/users/login', {
          username,
          password
      })
        localStorage.setItem('token', response.data.user);
        props.setOpenForm(null);
        props.setLoggedIn(true);
      } catch (error) {
        toast.error('Please check your username and password')  
      }
    }
  
    return (
      <div>
        <form onSubmit={loginUser}>
        <h1>Login</h1>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    )

}


