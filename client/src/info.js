import React from 'react';
import { useState, useEffect } from 'react';
import './info.css';
import Axios from 'axios';

function Display(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno1, setPhoneno1] = useState('');
    const [phoneno2, setPhoneno2] = useState('');
    const [hobby, setHobby] = useState('');

    const [userList, setUserList] = useState([]);

    function addInfo(){
        Axios.post('http://localhost:3001/info', {
            name: name,
            email: email,
            phoneno1: phoneno1,
            phoneno2: phoneno2,
            hobby: hobby
        }).then(() => {
            console.log('success display');
        })
    }

    function getUser(){
        Axios.get(('http://localhost:3001/user').then((response) => {
            setUserList(response.data);
        }));
    }

   

    return(
        <div className='info-container'>
            <form className='info-box' action='#'>
                <h1 style={{color: '#391946'}}>USER INFORMATION</h1>
                <i className="fa fa-user form-icon"></i>
                <input type="text" name="nm" placeholder="Name" onChange={(e) =>{
                    setName(e.target.value);
                }}/><br/>
                <i className="fa fa-envelope form-icon"></i>
                <input type="text" name="email" placeholder="Email" onChange={(e) =>{
                    setEmail(e.target.value);
                }}/><br/>
                <i className="fa fa-phone form-icon"></i>
                <input type="text" name="pno1" placeholder="Phone- Home" onChange={(e) => {
                    setPhoneno1(e.target.value);
                }}/><br/>
                <i className="fa fa-phone form-icon"></i>
                <input type="text" name="pno2" placeholder="Phone- Mobile" onChange={(e) => {
                    setPhoneno2(e.target.value);
                }}/><br/>
                <i className="far fa-grin-alt form-icon"></i>
                <input type="text" name="hobby" placeholder="Hobbies" onChange={(e) => {
                    setHobby(e.target.value);
                }}/><br/>
                <button type='submit' onClick={addInfo}>Submit</button>
                {/* <button type='submit' onClick={}>Update</button> */}
                {/* <button type='submit' onClick={}>Delete</button> */}
            </form>
            <div className='info-box' style={{marginTop: '15px'}}>
                <button onClick={getUser}>Current Users</button>
                {userList.map((val, key) => {
                    return(
                        <div>
                            <h4>{val.username}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Display;