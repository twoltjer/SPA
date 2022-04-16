import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <Link to="/">Home</Link>&nbsp;|&nbsp;
            <Link to="meme">Meme</Link>
        </div>
    );
}

export default Nav;