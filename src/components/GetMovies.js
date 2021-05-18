import React from 'react'
import axios from 'axios'


class GetMovies extends React.Component {


    state = {
        moviesDetails: []
    }

    componentDidMount() {
        // GET request using axios with set headers
        
        axios.get('http://localhost:8080/bookMyShowServices/api/moviesDetails')
            .then(response => this.setState({ moviesDetails: response }));
    }


    render() {
        return (<div>
            <h1>MoviesDetails</h1>
            <ul>
            <li>"kkkkk"</li>
            <li>{this.state.moviesDetails}</li>
            </ul>
            
        </div>)
    }
}



export default GetMovies
