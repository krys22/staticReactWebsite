import React, {Component} from 'react';
import Header from '../Common/header';
import image from '../assets/img/about.jpg';
import AboutCommon from '../Common/about'


class About extends Component {

    render(){
        return(
            <div>
            <Header
              title = "About Us"  
              subtitle = "IT'S COOL"   
              
              showButton = {false}
              image={image}           
               />
             <AboutCommon />  
           
       </div>
           )
    }
}

export default About;