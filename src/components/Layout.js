import React from "react"
import Footer from "./Footer"


const Layout = props => {
  return(
    <div className="d-flex flex-column justify-content-between h-100">
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout
