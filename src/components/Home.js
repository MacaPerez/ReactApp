import React from 'react'
import Navbar from "./Navbar"
import Header from "./Header"
import Filmcard from "./Filmcard"
import Loader from "./Loader"

class Home extends React.Component {

constructor(){
  super()
  this.state = {
    films: [],
    loading: true,
  }
}

componentDidMount(){
  fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=78d69b586b6f55809f16884ff99f42c1&language=es")
  .then((response) => {
    return response.json()
  })

  .then((data) => {
    this.setState({
      films: data.results,
      loading: false
    })
  })
}

renderFilms() {
  if (this.state.loading === true) {
    return <Loader className="tex-center"/>
  } else {
      return this.state.films.map((film) => {
        const imgPath = "https://image.tmdb.org/t/p/w500" + film.poster_path
        const altText = "Imagen de portada de " + film.title
        const urlDetail = "/film-detail/" + film.id
        return <Filmcard
          title={film.title}
          description={film.overview}
          mainImage={imgPath}
          id={film.id}
          alt={altText}
          url={urlDetail}
        />
      })
    }
  }


render(){
    return (
      <>
        <Navbar/>
        <main className="mainContent">
          <Header
            title="¡Bienvenid@ a UOC Flix!"
            subtitle="La app para amantes del cine, críticos, gafa-pastas o gente como tú con tiempo libre y buen gusto"
            secondTitle="Estas son alguna de las películas mejor valoradas.."
            emoji1="🎞️ "
            altText1="Film frame"
            emoji2="🍿 "
            altText2="Popcorn box"
            emoji3="🤓"
            altText3="Nerd face"
          />
          <div className="container gridContainer">
            {this.renderFilms()}
          </div>
      </main>
      </>
    )
  }
}

export default Home
