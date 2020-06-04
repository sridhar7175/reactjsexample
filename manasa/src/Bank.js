import React,{Component} from 'react'

class Bank extends Component{
    constructor(){
        super();

       this.state={
           
           count:200 
       }
    }
       increment=()=>{
           this.setState({
               count:this.state.count+10
           })

       }

       decrement=()=>{
           this.setState({
               count:this.state.count-10
           })

       }


    
    render(){
        return(
            <div>
                <h1>My Account</h1>
                <p>${this.state.count}</p>
                <button onClick={this.increment}>Deposit +$10</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>Withdraw -$10 </button>

            </div>
        )
    }
}
export default Bank
