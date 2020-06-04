import React,{Component} from 'react'
class Books extends Component{
    constructor(props){
        super(props);

    this.state={
        book:props.book
    }
    }
    add=()=>{
        this.props.addToWishList(this.state.book)
    }
    render(){
        return(
            <div>
                <h1>{this.state.book.title} </h1>
                <button onClick={this.add}>Add to WishList</button>
            </div>
        )
    }
}
export default Books