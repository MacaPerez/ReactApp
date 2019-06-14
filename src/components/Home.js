import React from 'react'
import Navbar from "./Navbar"
import Header from "./Header"
import Filmcard from "./Filmcard"
import axios from "axios"

class Home extends React.Component {

constructor(){
  super()
  this.state = {
    films: []
  }
}

componentDidMount(){
  fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=78d69b586b6f55809f16884ff99f42c1&language=es")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    this.setState({
      films: data.results
    })
  })

}

render(){
    return (
      <>
        <Navbar/>
        <main className="mainContent">
        <Header/>
          <div className="container gridContainer">
            {
              this.state.films.map((film) => {
                console.log(film)
                const imgPath = "https://image.tmdb.org/t/p/w500" + film.poster_path
                return <Filmcard title={film.title} description={film.overview} mainImage={imgPath} id={film.id}/>
              })
            }
          </div>
        </main>
      </>
    )
  }

}


export default Home
