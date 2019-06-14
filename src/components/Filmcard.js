import React from "react"

const Filmcard = propiedades => {

  return (

<article className="row no-gutters position-relative mb-3">
  <div className="col-12 col-sm-6 mb-md-0 p-md-3 text-center">
    <a href="#" title="Ver más información sobre esta película">
    <img src={propiedades.mainImage} className="img-fluid filmImage" alt="..." />
    </a>
  </div>
  <div className="col-12 col-sm-6 position-static p-3 pl-md-0 infoCol">
  <div>
      <h3 className="display6"><a href="#" title="Ver más información sobre esta película" className="cardLink-title">{propiedades.title}</a></h3>
      <p className="shortDescription display-less-1">{propiedades.description}</p>
    </div>
  <div className="cardLink-box">
      <a hreff="" title="Ver más información sobre esta película" className="btn card-link noBorder" data-toggle="modal" data-target=".bd-example-modal-lg">Más información</a>
  </div>
</div>
</article>

)
}

export default Filmcard
