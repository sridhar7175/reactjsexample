import React,{Component,useState,useEffect} from 'react';
//import axios from 'axios';



class Contact extends Component{
    constructor(){
        super();

        this.state={
            contact:{
                name:'',
                email:'',
                phone:'',
                description:''
            },
            touched:{
                name:false,
                email:false,
                phone:false,
                description:false
            }
        }
    }

    onChange=(e)=>{

        //e - form
        //target - field
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const targetName = target.name;
        console.log(targetName + " " + value)

        const contact = Object.assign({}, this.state.contact); 
        contact[targetName] = value;                 

        this.setState({
            contact
        })
    }

    onBlur=(e)=>{
        let touched = Object.assign({}, this.state.touched); 
        touched[e.target.name] = true;                 
        this.setState({
            touched
        })
    }

    isValidEmail=(email)=>{
        return ((email.indexOf("@")!==-1) && (email.indexOf(".")!==-1));
    }

    validate=()=>{
        const errors = {};
        const {contact} = this.state;
        
        if (!contact.name) {
            errors.name = 'Name is required';
        }

        if (!contact.email) {
            errors.email = 'Email is required';
        } else if(!this.isValidEmail(contact.email)){
            errors.email = 'Email is not valid format';
        }

        if (!contact.phone) {
            errors.phone = 'Phone is required';
        }

        if (!contact.description) {
            errors.description = 'Description is required';
        }

        

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        };
    }

    submit=(e)=>{
        
        e.preventDefault();
        
        var formBody = [];
    
        for (var property in this.state.contact) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(this.state.contact[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }

        formBody = formBody.join("&");

        console.log(formBody)

        fetch('/api/contact', {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
          })
          .then(resp => resp.json())
          .then(contact=> { 
             alert("Thank you for submission. We will contact you soon")
          })
          .catch((err)=>{
              alert("Sorry, Failed to submit try again")
          });
    }

    render(){
        const {contact, touched} = this.state;
        const {errors, isValid} = this.validate();

        return(
            <div><br/>
                <input type="text" onBlur={this.onBlur} name="name" onChange={this.onChange}/>
                {touched.name && errors.name && <span>{errors.name}</span>}
                <input type="text" onBlur={this.onBlur} name="email" onChange={this.onChange}/>
                {touched.email && errors.email && <span>{errors.email}</span>}
                <input type="text" onBlur={this.onBlur} name="phone" onChange={this.onChange}/>
                {touched.phone && errors.phone && <span>{errors.phone}</span>}
                <input type="textarea" onBlur={this.onBlur} name="description" onChange={this.onChange}/>
                {touched.description && errors.description && <span>{errors.description}</span>}
                <button onClick={this.submit} disabled={!isValid}>Submit</button>
            </div>
        )
    }
}

export default Contact;