import React from 'react';
import './UserInput.css'
const UserInput = (props) => <input  className = "UserInput" type = "text" onChange = {props.changes} value = {props.username}/>

export default UserInput;