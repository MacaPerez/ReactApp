import React from "react"

const Loader = props => {
  return (
    <div className="d-flex justify-content-center m-auto loaderCentered">
      <img className="img-fluid" src={process.env.PUBLIC_URL + '/static/img/cargando.gif'} alt="cargando contenido"/>
    </div>
  )
}

export default Loader
