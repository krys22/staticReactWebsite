import React, {Component} from 'react';
import Field from '../Common/field'; 
import {withFormik} from 'formik';

const fields = {
    sections : [
        [
            {name: 'name', elementName: 'input', type: 'text',  placeholder: 'Your name'},
            {name: 'email', elementName: 'input', type: 'email',  placeholder: 'Your email'},
            {name: 'phone', elementName: 'input', type: 'text',  placeholder: 'Your Phone Number'},
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text',  placeholder: 'Enter your message'},
        ]
    ]
}



class Contact extends Component{

    render(){

        return(
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form onSubmit = {this.props.handleSubmit} name="sentMessage" novalidate="novalidate">
                    <div className="row align-items-stretch mb-5">
                       {fields.sections.map((section, sectionIndex) => {

                           return(
                               <div className = "col-md-6" key = {sectionIndex}>
                                   {section.map((field, i) => {
                                       return <Field {...field} key={i}
                                       value={this.props.values[field.name]}
                                       name={field.name}
                                       onChange={this.props.handleChange}
                                       onBlur={this.props.handleBlur}
                                       touched = {this.props.touched[field.name]}
                                       errors = {this.props.errors[field.name]}
                                       />
                                   }
                                   )}
                                   </div>
                           )
                       }
                       
                       )}

                            
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit"
                        
                        >Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        )
    }
}



export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        phone: '',
        email: '',
        message: '',
    }),
    validate: values => {
        const errors = {};
        Object.keys(values).map( v => {
            if(!values[v]){
                errors[v] = "Required";
            }
        })

        return errors;
    },

    handleSubmit: (values, {setSubmitting}) => {
        alert("You've submitted the form", JSON.stringify(values))
    }
})(Contact);