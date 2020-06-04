import React, { Component } from 'react'

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loading: false,
            error:false
        }
    }
    render() {
        if(this.state.error){
            return(
                <div>falied to Loading.... </div>
            )
        }
        if (this.state.loading) {
            return (
                <div>
                    <h1>Users</h1>
                    <ul>
                        {
                            this.state.users.map((user) => {
                                return <li>{user.name}</li>
                            })
                        }
                    </ul>
                </div>
            )
        }
        return(
            <div>Loading.......</div>
        )
    }
    componentDidMount() {
        var url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then((response) => response.json())
            .then((users) => {
                this.setState({
                    users: users,
                    loading: true
                })
            })
            .catch((err)=>{
                this.setState({
                   error:true
                    
                })
            })
    }
}
export default Users