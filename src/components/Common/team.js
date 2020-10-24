import React, {Component} from 'react';
import Individual from '../Common/individual';


const details = [
    {role: 'Lead Designer', name: 'Kay Garland', image: 1},
    {role: 'Lead Marketer', name: 'Larry Parker', image: 2},
    {role: 'Lead Developer', name: 'Diana Petersen', image: 3},

]

class Team extends Component{

    render(){
        return(
            <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    
                {details.map((detail, index) => {
                        return <Individual {...detail} key = {index}/>
                    })} 
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        )
    }
}


export default Team;