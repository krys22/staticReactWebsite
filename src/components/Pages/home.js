import React, {Component} from 'react';
import Header from '../Common/header';
import image from '../assets/img/header-bg.jpg';

//Re useable components
import Services from '../Common/services';
import Portfolio from '../Common/portfolio';

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
                <Services />
                <Portfolio />
        </div>
        )
    }
}

export default Home;