import React, {Component} from 'react';
import Field from '../Common/field'

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

    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }
    submitForm = (e) => {
        alert("Form Submitted. Thank you very much");
    }

    render(){

        return(
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form onSubmit = {e => this.submitForm(e)} name="sentMessage" novalidate="novalidate">
                    <div className="row align-items-stretch mb-5">
                       {fields.sections.map((section, sectionIndex) => {

                           return(
                               <div className = "col-md-6" key = {sectionIndex}>
                                   {section.map((field, i) => {
                                       return <Field {...field} key={i}
                                       value = {this.state[field.name]}
                                       onChange = {e => this.setState({[field.name] : e.target.value})}
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

export default Contact;