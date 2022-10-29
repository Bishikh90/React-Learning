import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'Mech2Dude Tutorials',
            keyword: 'User Input here'
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword: event.target.value?event.target.value:'User Input here'})
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <div className='logo'>{this.state.title}</div>
                    <center>
                        <input type='text' onChange={this.handleChange}></input>
                        <div style={{color: 'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr />
            </React.Fragment>
        )
    }
}

/*
// Class Component
class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'Mech2Dude Tutorials',
            keyword: 'User Input here'
        }
    }
    render() {
        const myStyle = {
            header:{
                backgroundColor: 'teal'
            },
            logo:{
                fontSize: '30px',
                textAlign: 'center',
                color: '#fff'
            }
        }
        return (
            <React.Fragment>
                <header style={myStyle.header}>
                    <div style={myStyle.logo}>{this.state.title}</div>
                    <center>
                        <input type='text'></input>
                        <div style={{color: 'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr />
            </React.Fragment>
        )
    }
}


// Function Component
const Header = () =>{
    return(
        <React.Fragment>
            <center>
                <h2>Mech2Dude@gmail.com</h2>
            </center>
            <hr/>
        </React.Fragment>
    )
}
*/
export default Header;