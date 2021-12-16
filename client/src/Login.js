import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import './info.css';
import Axios from 'axios';


function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function addUser(){
        Axios.post('http://localhost:3001/create', {
            username: username,
            password: password
        }).then(() => {
            console.log('success');
        })
    }

    let navigate= useNavigate();

    function handleClick(e){
        
        navigate('/display');
    }

    return(
        <div className='form-container'>
            <form className='form-box' action='#'>
                <h1 style={{color: '#391946'}}>USER LOGIN</h1>
                <i className="fa fa-user form-icon"></i>
                <input type="text" name="usrnm" placeholder="Username" onChange={(e) => {
                    setUsername(e.target.value);
                }}/><br/>
                <i className="fa fa-key form-icon"></i>
                <input type="password" name="psw" placeholder="Password" onChange={(e) => {
                    setPassword(e.target.value);
                }}/><br/>
                <button type='submit' onClick={() => {handleClick(); addUser();}}>LOGIN</button>  
            </form>
        </div> 
    );

}

export default Login