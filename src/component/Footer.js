import React from 'react';

const Footer = (props) =>{
    return(
        <React.Fragment>
            <center>
            <hr/>
                <h2>&copy; Mech2Dude {props.year} {props.month}</h2>
            </center>
        </React.Fragment>
    )
}

export default Footer;