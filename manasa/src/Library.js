import React, {Component} from 'react'


class Library extends Component{
    constructor(){
        super();

        this.state={
            books:[],
            title:'',
            author:''
        }

        this.onTitleChange=this.onTitleChange.bind(this)
    }

    onTitleChange(e){
        var title=e.target.value;
        this.setState({
            title:title
        })
    }

    onAuthorChange=(e)=>{
        this.setState({
            author:e.target.value
        })
    }

    addBook=()=>{
        var title=this.state.title;
        var author=this.state.author;

        var book={
            id:this.state.books.length+1,
            title:title,
            author:author
        }

        this.setState({
            books:[
                ...this.state.books,
                book
            ],
            title:'',
            author:''
        })
    }

    render(){
        return(
            <div>
                <h1>Library</h1>
                <input type="text" name="title" value={this.state.title} onChange={this.onTitleChange}/>
                <input type="text" name="author" value={this.state.author} onChange={this.onAuthorChange}/>
                <button onClick={this.addBook}>Add Book</button>
                <table>
                    <tbody>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Author</th>
                        </tr>
                        {
                            this.state.books.map((book)=>{
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

export default Library;