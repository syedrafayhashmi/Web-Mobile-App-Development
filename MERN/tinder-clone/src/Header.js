import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';

function Header() {
    return (
        <div className='header'>
            <h2>I'm a Header</h2>
            <PersonIcon/>
        </div>
    )
}

export default Header;
