import React from "react"
import {Link} from "react-router-dom"

const Details = props => {
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
                <h1 className="text-dark">Film Title</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-6 col-sm-4 col-md-4 col-lg-2 mt-3">
                <img src="https://picsum.photos/200/300" alt="img" className="img-fluid"/>
            </div>
            <div className="col-6 col-sm-8 col-md-2 mt-3">
                <h2 className="fSize--smaller">Score:</h2>
                <span className="badge badge-pill badge-danger">85%</span>
                <h2 className="pt-3 fSize--smaller">Géneros:</h2>
                <span className="badge badge-pill badge-info">Drama</span>
                <span className="badge badge-pill badge-info">Comedia</span>
                <span className="badge badge-pill badge-info">Terror</span>
                <span className="badge badge-pill badge-info">Otro</span>
                <span className="badge badge-pill badge-info">Otro</span>
                <span className="badge badge-pill badge-info">Otro</span>
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
                            <p className="review">Lorem ipsum dolor sit amet consectetur adipiscing elit, platea mauris tempus litora netus congue torquent massa, nisi maecenas in vitae facilisi eros. Phasellus in nisi fusce nulla senectus potenti
                                vehicula, ornare
                                facilisis habitant cum className id massa, ridiculus ultricies quis tellus fringilla mus. Vitae commodo lectus accumsan ultrices ut diam magna sed, sem turpis facilisi natoque lacinia ridiculus curabitur pharetra,
                                parturient
                                dapibus habitant tellus penatibus lobortis luctus.</p>
                            <p className="review">Lorem ipsum dolor sit amet consectetur adipiscing elit, platea mauris tempus litora netus congue torquent massa, nisi maecenas in vitae facilisi eros. Phasellus in nisi fusce nulla senectus potenti
                                vehicula, ornare
                                facilisis habitant cum className id massa, ridiculus ultricies quis tellus fringilla mus. Vitae commodo lectus accumsan ultrices ut diam magna sed, sem turpis facilisi natoque lacinia ridiculus curabitur pharetra,
                                parturient
                                dapibus habitant tellus penatibus lobortis luctus.</p>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="imagenes" role="tabpanel" aria-labelledby="imagenes-tab">
                        <div className="scrolling-wrapper-flexbox">
                            <img src="https://picsum.photos/237/200" alt="san francisco" className="imgG"/>
                            <img src="https://picsum.photos/133/200" alt="san francisco" className="imgG"/>
                            <img src="https://picsum.photos/421/200" alt="san francisco" className="imgG"/>
                            <img src="https://picsum.photos/234/200" alt="san francisco" className="imgG"/>
                            <img src="https://picsum.photos/124/200" alt="san francisco" className="imgG"/>
                            <img src="https://picsum.photos/222/200" alt="san francisco" className="imgG"/>
                            <img src="https://picsum.photos/325/200" alt="san francisco" className="imgG"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
    </>

  )
}

export default Details
