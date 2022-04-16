import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import meme from './meme.jpeg';

function Meme() {
    return (
        <div>
            <header><h1 id="page-title">Meme page!</h1><hr /></header>
            <Nav />
            <div class="image"><img src={meme} alt="Meme" width="80%" /></div>
            <Footer />
        </div>
    );
}

export default Meme;