import React, {Component} from 'react';
import SingleService from './singleService';

const services = [
    {title: 'E-commerce', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon: 'fa-shopping-cart'},
    {title: 'Responsive Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon: 'fa-laptop'},
    {title: 'Web Security', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon: 'fa-lock'},
    
];

class Services extends Component{

    render() {
        return (
            <div>
                 <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row text-center">
                    {services.map((service, index) => {
                        return <SingleService {...service} key = {index}/>
                    })}
                    
                </div>
            </div>
        </section>
            </div>
        )
    }
}

export default Services;