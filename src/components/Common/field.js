import React, {Component} from 'react';

class Field extends Component{

    render(){
        return(
            <div className="form-group">
                 <input className="form-control" id="email" type="email" placeholder="Your Email *" 
                                required="required" data-validation-required-message="Please enter your email address." 
                                value = {this.state.email}
                                onChange = {e => this.setState({
                                    email : e.target.value
                 })}
                />
                    <p className="help-block text-danger"></p>
            </div>
        )
    }
}

export default Field;