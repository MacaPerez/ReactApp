import React from "react"
import Navbar from "./Navbar"

const Layout = props => {
  return(
    <>  
      <Navbar/>
      <main>
        {props.children}
      </main>
      <div className="footer">Macarena</div>
    </>
  )
}


export default Layout
