import React, {Component} from 'react';
import Header from '../Common/header';
import {image} from '../assets/img/header-bg.jpg';

class Home extends Component {

    render(){
        return(
        <div>
             <Header
               title = "Welcome to Our Studio"  
               subtitle = "IT'S NICE TO MEET YOU"   
               buttonText = "Tell me more"
               link = "/services" 
               showButton = {true}
               image={image}           
                />
        </div>
        )
    }
}

export default Home;