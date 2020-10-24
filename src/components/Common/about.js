import React, {Component} from 'react';
import SingleAbout from '../Common/singleAbout';


const items = [
    {
        title : 'Our Humble Beginnings', date : '2009-2011', image : 1, 
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
       {   title : 'An Agency is Born', date : 'March 2011', image : 2, 
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
       { title : 'Transition to Full Service', date : 'December 2012', image : 3, 
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
       { title : 'Phase Two Expansion', date : 'July 2014', image : 4, 
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
       
]

class AboutCommon extends Component{

    render() {
        return (
            <div>
                 <section class="page-section" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul class="timeline">
                {items.map((item, index) => {
                        return <SingleAbout {...item} key = {index}/>
                    })} 
                    
                    <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
            </div>
        )
    }
}

export default AboutCommon;
