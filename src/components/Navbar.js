import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component{

  constructor(){
    super()
    this.state = {
      movie: "",
    }
  }

  handleSubmit(event){
    event.preventDefault()
    window.location.replace("/search/" + this.state.movie)
  }

  handleChange(event){
    this.setState({
      movie: event.target.value
    })
  }

  render(){
  return (
<nav className="navbar navbar-expand-md navbar-light bgCustom--coldGradient">

  <Link to="/" className="navbar-brand" title="ir a la home">
    <img className="logo" src={process.env.PUBLIC_URL + '/static/img/logo2.png'} alt="Ir a la home. Logotipo caja de palomitas y texto UOC Flix"/>
    <img className="imago" src={process.env.PUBLIC_URL + '/static/img/imago.png'} alt="Ir a la home. Imagotipo caja de palomitas UOC Flix"/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon customToggler"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/popular" className="nav-link nav-link__custom" title="Ver películas más populares">
        Más populares
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-link__custom" href="#" title="Consultar información corporativa de UOC Flix">Sobre nosotros</a>
      </li>
    </ul>
  </div>
  <form role="search" className="form-inline navBar__SearchForm my-2 my-lg-0 mr-5" onSubmit={this.handleSubmit.bind(this)}>
    <div className="md-form my-0 d-flex flex-nowrap">
      <input className="form-control navBar__SearchInput mr-sm-2" type="search" placeholder="Buscar..." aria-label="Buscar películas" onChange={this.handleChange.bind(this)}/>
      <i className="fas fa-search text-white align-self-center ml-2" aria-hidden="true"></i>
    </div>
  </form>

</nav>
  )
}
}

export default Navbar
