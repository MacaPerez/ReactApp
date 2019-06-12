import React from "react"

const Filmcard = props => {
  return (

<article className="row no-gutters position-relative mb-3">
  <div className="col-12 col-sm-6 mb-md-0 p-md-3 text-center">
    <a href="#" title="Ver más información sobre esta película"><img src="https://picsum.photos/200/300" className="img-fluid filmImage" alt="..." /></a>
  </div>
  <div className="col-12 col-sm-6 position-static p-3 pl-md-0 infoCol">
  <div>
      <h3 className="display6"><a href="#" title="Ver más información sobre esta película" className="cardLink-title">Columns with stretched link</a></h3>
      <p className="shortDescription display-less-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
  </div>
  <div className="cardLink-box">
      <a href="#" title="Ver más información sobre esta película" className="card-link">Más información</a>
  </div>
</div>
</article>

)
}

export default Filmcard
