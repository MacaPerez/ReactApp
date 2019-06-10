import React from "react"

const Navbar = props => {
  return (
<nav className="navbar navbar-expand-md navbar-light bg-light">

  <a className="navbar-brand" href="index.html">
  <img className="logo" src={process.env.PUBLIC_URL + 'static/img/logo2.png'} alt="UOC Flix popcorn box logo"/>
  <img className="imago" src={process.env.PUBLIC_URL + 'static/img/imago.png'} alt="UOC Flix popcorn box  short logo"/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon customToggler"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link nav-link__custom" href="#">Más populares<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-link__custom" href="#">Sobre nosotros</a>
      </li>
    </ul>
  </div>
  <form className="form-inline navBar__SearchForm my-2 my-lg-0">
    <div className="md-form my-0">
      <input className="form-control navBar__SearchInput mr-sm-2" type="search" placeholder="Buscar..." aria-label="Search"/>
    </div>
  </form>

</nav>
  )
}

export default Navbar
