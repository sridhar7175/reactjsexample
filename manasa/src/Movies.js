import React, { Component } from 'react'
class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
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
                    <h1>movies</h1>
                    <table>
                        <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Rating</th>
                        </tr>
                        {
                            this.state.movies.map((movie) => {
                                return <tr key={movie.id}>
                    
                                    <td>{movie.title}</td>
                                    <td>{movie.rating}</td>


                                </tr>
                            })
                        }
                    </tbody>

                    </table>
                </div>
            )
        }
        return(
            <div>Loading.......</div>
        )
    }
    componentDidMount() {
        var url = 'https://gist.githubusercontent.com/yannski/3019778/raw/dfb34d018165f47b61b3bf089358a3d5ca199d96/movies.json';
        fetch(url)
            .then((response) => response.json())
            .then((movies) => {
                this.setState({
                    movies: movies,
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
export default Movies