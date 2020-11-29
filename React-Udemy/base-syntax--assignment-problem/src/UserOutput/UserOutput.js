import React from 'react';

const UserOutput = (props) => {
    const style = {
        border: '2px solid #bbb',
        borderRadius:'10px',
        width: '155px',
        height:'auto',
        margin: '16px',
        padding:'16px'

    }

    return(
    <div style = {style}>
        <p >Username: {props.userName}</p>
        <p>Other text </p>
    </div>
    );
    };

    export default UserOutput;