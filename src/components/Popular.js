import React from 'react'
import Navbar from "./Navbar"
import Header from "./Header"
import Filmcard from "./Filmcard"
import Loader from "./Loader"

class Popular extends React.Component {

  constructor(){
    super()
    this.state = {
      films: [],
      loading: true,
    }
  }

  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=78d69b586b6f55809f16884ff99f42c1&language=es")
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
          <Header title="Más populares"
            subtitle=""
            secondTitle="Estas son las películas que más gustan a nuestros usuarios"
            emoji1="🚀 "
            altText1="Rocket"
            emoji2="💥 "
            altText2="Colission"
            emoji3="👍"
            altText3="Thumb up"
          />
          <div className="container gridContainer">
            {this.renderFilms()}
          </div>
      </main>
      </>
    )
  }
}


export default Popular
