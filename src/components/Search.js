import React from 'react'
import Header from "./Header"
import {Link} from "react-router-dom"
import Filmcard from "./Filmcard"
import Loader from "./Loader"

class Search extends React.Component {

constructor(){
  super()
  this.state = {
    films: [],
    loading: true,
  }
}

componentDidMount(){
  fetch("https://api.themoviedb.org/3/search/movie?api_key=78d69b586b6f55809f16884ff99f42c1&language=es&query=" + this.props.match.params.movie)
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
    return <Loader/>
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
  const headerTitle = "Resultados de búsqueda por " + this.props.match.params.movie
    return (
      <>
        <nav className="nav p6 bgCustom--coldGradient">
            <span className="nav-item">
                <Link to="/" className="nav-link active backLink" title="volver a la página inicial">
                  <i className="fa fa-arrow-left mr-3"></i>
                  Home
                </Link>
            </span>
        </nav>
        <main className="mainContent">
        <Header title={headerTitle}/>
          <div className="container gridContainer">
            {this.renderFilms()}
          </div>
        </main>
      </>
    )
  }
}


export default Search
