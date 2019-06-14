import React from "react"
import Home from "./Home"
import Footer from "./Footer"
import Details from "./Details"

const Layout = props => {
  return(
    <div className="d-flex flex-column justify-content-between h-100">
      {props.children}
      <Footer/>
    </div>
  )
}


export default Layout
