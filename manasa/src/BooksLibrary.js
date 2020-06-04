import React, { Component } from 'react'
import BooksList from './BookList';
class BooksLibrary extends Component {
    constructor() {
        super();
        var books = [{
            id: 1,
            title: "java"
        },
        {
            id: 2,
            title: "python"
        }
        ]
        this.state = {
            books: books,
            wishList: []
        }
    }
    addToWishList = (book) => {
        console.log(JSON.stringify(book))
        this.setState({
            wishList:[
                ...this.state.wishList,
                book
            ]
        })
    }
    render() {
        return (
            <div>
                <h1>Books Library</h1>
                <p>Wishlist:{this.state.wishList.length}</p>
                <BooksList books={this.state.books} addToWishList={this.addToWishList} />
            </div>
        )
    }
}
export default BooksLibrary  