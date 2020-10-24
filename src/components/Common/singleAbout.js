import React, {Component} from 'react';

class SingleAbout extends Component{

    render() {
        return (
            <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={`../assets/img/about/${this.props.image}.jpg`} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{this.props.date}</h4>
                                <h4 className="subheading">{this.props.title}</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">{this.props.description}</p></div>
                        </div>
        </li>
        )
    }
}

export default SingleAbout;