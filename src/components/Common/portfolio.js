import React, {Component} from 'react';
import SinglePortfolio from '../Common/singlePortfolio'


const portfolios = [
    {title: 'Threads', description: 'Illustration', no :1},
    {title: 'Explore', description: 'Graphic Design', no :2},
    {title: 'Finish', description: 'Identity', no :3},
    {title: 'Lines', description: 'Branding', no :4},
    {title: 'SouthWest', description: 'Website Design', no :5},
    {title: 'Window', description: 'Photography', no :6}
    
];
class Portfolio extends Component{

    render() {
        return (
            <div>
                 <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                {portfolios.map((portfolio, index) => {
                        return <SinglePortfolio {...portfolio} key = {index}/>
                    })}
                </div>
            </div>
        </section>
            </div>
        )
    }
}

export default Portfolio;