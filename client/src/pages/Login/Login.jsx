import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useRouteError } from 'react-router-dom';
import { makeRequest } from '../../makeRequest';
import { loginCall } from '../../redux/apiCalls';
import { loginSuccess } from '../../redux/authReducer';
import "./Login.scss"
const Login = () => {
 
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
      identifier: '',
      password: '',
    })
 
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(userData.identifier);
      
      axios
      .post('http://localhost:1337/api/auth/local', {
        identifier: userData.identifier,
        password: userData.password,
      })
      .then(response => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        loginCall(dispatch,userData)
        //dispatch(loginSuccess(response.data.user));    
        navigate("/")
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
        <br />
        <label>
          Email:
          <input type="text" name="identifier" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={e => handleChange(e)} />
        </label>
        <br />
        <button>Login</button>
      </form>
)}

export default Login