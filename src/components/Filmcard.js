import React from "react"
import {Link} from "react-router-dom"

const Filmcard = props => {

  return (

<article className="row no-gutters position-relative mb-3">
  <div className="col-12 col-sm-6 mb-md-0 p-md-3 text-center">
    <a href="#" title="Ver más información sobre esta película">
    <img src={props.mainImage} className="img-fluid filmImage" alt={props.alt} />
    </a>
  </div>
  <div className="col-12 col-sm-6 position-static p-3 pl-md-0 infoCol">
  <div>
      <h3 className="display6"><a href="#" title="Ver más información sobre esta película" className="cardLink-title">{props.title}</a></h3>
      <p className="shortDescription display-less-1">{props.description}</p>
    </div>
  <div className="cardLink-box">
      <Link to={props.url} title="Ver más información sobre esta película" className="btn card-link noBorder">Más información</Link>

  </div>
</div>
</article>

)
}

export default Filmcard
