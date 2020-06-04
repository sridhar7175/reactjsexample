import React,{Component} from 'react';

class Example1 extends Component{
    constructor(){
        super();
        this.state={
          clicks:0
        }
      }
      // arrow functions
      updateClicks=()=>{
          this.setState({
              clicks:this.state.clicks+1
          })
      }
      

    render(){
        return(
            <h1 onClick={this.updateClicks}>  {this.state.clicks}{this.props.title}</h1>
        )
    }
}

export default Example1