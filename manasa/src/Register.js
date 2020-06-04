import React, { Component } from 'react'
class Register extends Component {
    constructor() {
        super();
        this.state = {
            users: {
                fullName: '',
                dateOfBirth: '',
                email: '',
                phone: '',
                password: '',
                about: '',
                company:''
            }
        }
    }

    onChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const targetName = target.name;
        console.log(targetName + " " + value)

        const users = Object.assign({}, this.state.users);
        users[targetName] = value;

        this.setState({
            users
        })
    }
    render() {
        return (
            <div>
                <h1>Register Form</h1>
                <input type="text" placeholder="Full Name" name="fullName"  value={this.state.users.fullName} onChange={this.onChange} />
                <input type="text" placeholder="Date Of Birth" name="dateOfBirth" value={this.state.users.dateOfBirth} onChange={this.onChange} />
                <input type="text"  placeholder="email"name="email" value={this.state.users.email} onChange={this.onChange} />
                <input type="text" placeholder="phone" name="phone" value={this.state.users.phone} onChange={this.onChange} />
                <input type="text"  placeholder="password"name="password" value={this.state.users.password} onChange={this.onChange} />
                <input type="text"  placeholder="about"name="about" value={this.state.users.about} onChange={this.onChange} />
                <input type="text" placeholder="company" name="company" value={this.state.users.company} onChange={this.onChange}/>
                <input type="checkbox" name="terms" onChange={this.onChange}/>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}
export default Register
