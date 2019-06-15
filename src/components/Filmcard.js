import React from "react"
import {Link} from "react-router-dom"

const Filmcard = props => {

  return (
    <article className="row no-gutters position-relative mb-3">
        <div className="col-8 col-sm-6 p-md-3 filmImage__container">
          <Link to={props.url}  title="Ver más información sobre esta película">
            <img src={props.mainImage} className="img-fluid filmImage" alt={props.alt} />
          </Link>
        </div>

        <div className="col-12 col-sm-6 position-static p-3 pl-md-0 infoCol">

          <div>
              <Link to={props.url} title="Ver más información sobre esta película" className="cardLink-title">
                <h3 className="display6">{props.title}</h3>
              </Link>
              <p className="shortDescription display-less-1">{props.description}</p>
              <span aria-label="hidden">...</span>
          </div>

          <div className="cardLink-box">
              <Link to={props.url} title="Ver más información sobre esta película" className="btn card-link noBorder">Más información</Link>
          </div>
      </div>
    </article>
  )
}

export default Filmcard
