import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useRouteError } from 'react-router-dom';
import { makeRequest } from '../../makeRequest';
import "./Register.scss"
const Register = () => {
 
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
      username: '',
      email: '',
      password: '',
    })
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(userData.username);
      axios
      .post('http://localhost:1337/api/auth/local/register', {
        username: userData.username,
        email: userData.email,
        password: userData.password,
      })
      .then(response => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });

    }
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({...userData, [name]: value });
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={e => handleChange(e)} />
        </label>
        <br />
        <button>Register</button>
      </form>
)}

export default Register