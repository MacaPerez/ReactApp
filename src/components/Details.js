import React from "react"
import {Link} from "react-router-dom"

class Details extends React.Component {

constructor(){
  super()
  this.state = {
      details: {
        genres: [],
        title: "Movie title",
        vote_average: 0,
    },
     images: []
  }
}

componentDidMount(){
  this.getFilmData()
  this.getImageGallery()
}

getFilmData(){
  fetch("https://api.themoviedb.org/3/movie/" + this.props.match.params.id +"?api_key=78d69b586b6f55809f16884ff99f42c1&language=es")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    this.setState({
      details: data
    })
  })
}

getImageGallery(){
  fetch("https://api.themoviedb.org/3/movie/" + this.props.match.params.id +"/images?api_key=78d69b586b6f55809f16884ff99f42c1&language=es")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    this.setState({
      images: [
        ...data.backdrops,
        ...data.posters,
      ]
    })
  })
}

renderGenres(){
    return this.state.details.genres.map((genre) => {
      return <span className="badge badge-pill badge-info">{genre.name}</span>
    })
}

renderImages(){

  return this.state.images.map((image, index) => {
    const url = "https://image.tmdb.org/t/p/w500" + image.file_path
    console.log(url)
    const film = this.state.details
    const alt = film.title + (index + 1)
    return <img src={url}
    alt={alt}
    className="imgG"/>

  })
}

render(){
  const film = this.state.details
  const imgPath = "https://image.tmdb.org/t/p/w500" + film.poster_path
  const altText = "Imagen de portada de " + film.title
  const score = film.vote_average * 10 + "%"


  return (
    <>

    <nav className="nav p6 bgCustom">
        <span className="nav-item">
            <Link to="/" className="nav-link active text-white" title="volver a la página anterior">
              <i className="fa fa-arrow-left mr-3"></i>Volver
            </Link>
        </span>
    </nav>

    <main className="container">
        <div className="row">
            <div className="col mt-4">
                <h1 className="text-dark">{film.title}</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-6 col-sm-4 col-md-4 col-lg-2 mt-3">
                <img src={imgPath} alt={altText} className="img-fluid"/>
            </div>
            <div className="col-6 col-sm-8 col-md-2 mt-3">
                <h2 className="fSize--smaller">Score:</h2>
                <span className="badge badge-pill badge-danger">{score}</span>
                <h2 className="pt-3 fSize--smaller">Géneros:</h2>
                {this.renderGenres()}
            </div>
            <div className="col-12 col-md-6 col-lg-8 mt-3 mx-auto">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active navLink__tabCustom" id="informacion-detallada-tab" data-toggle="tab" href="#informacion-detallada" role="tab" aria-controls="informacion-detallada" aria-selected="true">Sinopsis</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="imagenes-tab" data-toggle="tab" href="#imagenes" role="tab" aria-controls="imagenes" aria-selected="false">Imágenes</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="informacion-detallada" role="tabpanel" aria-labelledby="informacion-detallada-tab">
                        <div className="mt-4">
                            <p className="review">{film.overview}</p>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="imagenes" role="tabpanel" aria-labelledby="imagenes-tab">
                        <div className="scrolling-wrapper-flexbox">
                          {this.renderImages()}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
    </>

  )
  }

}



export default Details
