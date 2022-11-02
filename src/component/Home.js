import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Json from './db.json'
import NewsDisplay from './NewsDisplay';

// Whenever we want to render data, we need to have class component
class Home extends React.Component {
    constructor(){
        super();

        this.state={
            news: Json,
            filtered: Json
        }
    }

    filterNews(userInput){
        const output = this.state.news.filter((data) =>{
            return data.title.toLowerCase().indexOf(userInput.toLowerCase())> -1
        })
        this.setState({filtered: output});
    }

    render(){
        return(
            <React.Fragment>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsDisplay dataList={this.state.filtered}/>
                <Footer year={2020} month={'Dec'}/>
            </React.Fragment>
        )
    }
}


// const Home = () => {
//     return (
//         <React.Fragment>
//             <Header/>
//             <h1>Hi to React</h1>
//             <h3>Mech2Dude</h3>
//             <Footer year={2020} month={'Dec'}/>
//         </React.Fragment>
//     )
// }

export default Home;