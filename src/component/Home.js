import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <h1>Hi to React</h1>
            <h3>Mech2Dude</h3>
            <Footer year={2020} month={'Dec'}/>
        </React.Fragment>
    )
}

export default Home;