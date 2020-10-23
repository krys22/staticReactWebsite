import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class SinglePortfolio extends Component{

    render() {
        return (
            <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <Link class="portfolio-link" data-toggle="modal" to={`#portfolioModal${this.props.no}`}>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={`../assets/img/portfolio/0${this.props.no}-thumbnail.jpg`} alt="" />
                            </Link>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">{this.props.title}</div>
                                <div class="portfolio-caption-subheading text-muted">{this.props.description}</div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default SinglePortfolio;