import React, { Component } from 'react'
class Librarys extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            title: '',
            author: ''
        }
    }
    onChangeTitle = (e) => {
        var title = e.target.value;
        this.setState({
            title: title

        })
    }
    onChangeAuthor = (e) => {
        this.setState({
            author: e.target.value
        })
    }
    addLibrary = () => {
        var title = this.state.title;
        var author = this.state.author;
        var book = {
            id:this.state.books.length+1,
            title: title,
            author: author
        }
        this.setState({
            books: [
                ...this.state.books,
                book
            ],
            // removing books items
            title: '',
            author: ''
        })
    }


// render Mehod

    render() {
        return (
            <div>
                <h1>Library</h1>
                <input type="text" name="title" value={this.state.title} onChange={this.onChangeTitle} />
                <input type="text" name="author" value={this.state.author} onChange={this.onChangeAuthor} />
                <button onClick={this.addLibrary}>addLibrary</button>
                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                        </tr>
                        {
                            this.state.books.map((book) => {
                                return <tr key={book.id}>
                                     <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>


                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Librarys;
