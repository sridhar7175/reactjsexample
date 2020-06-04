import React, { Component } from 'react'
import Book from './Book'
class BooksList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books:props.books
        }
    }
    addToWishList=(book)=>{
        console.log(JSON.stringify(book))
        this.props.addToWishList(book);

    }
    render() {
        return (
            <div>
                <h1>Books List</h1>
                {
                    this.state.books.map((book)=>{
                        return<Book key={book.id} book={book} addToWishList={this.addToWishList}/>
                    })
                }
            </div>
        )
    }
}
export default BooksList