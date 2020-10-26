import React, {Component} from 'react';

class Field extends Component{

    render(){
        return(
            <div className="form-group">
                {this.props.elementName === 'input' ? 
                 <input className="form-control" id={this.props.name} type={this.props.type} placeholder={this.props.placeholder}
                 required="required" data-validation-required-message={`Please enter your ${this.props.name}.`} 
                 value = {this.props.value} onBlur = {this.props.onBlur}
                 onChange = {this.props.onChange} name={this.props.name}
                />
                :
                
                <textarea className="form-control" id={this.props.name} type={this.props.type} placeholder={this.props.placeholder}
                required="required" data-validation-required-message={`Please enter your ${this.props.name}.`} 
                value = {this.props.value} onBlur = {this.props.onBlur}
                onChange = {this.props.onChange} name={this.props.name}
                                
                  ></textarea>
    }
                    <p className="help-block text-danger">
                        {(this.props.touched && this.props.errors) && 
                        <span> {this.props.errors}</span>
                        }
                    </p>
            </div>
        )
    }
}

export default Field;