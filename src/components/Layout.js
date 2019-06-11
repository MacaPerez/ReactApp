import React from "react"
import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"
import Filmcard from "./Filmcard"

const Layout = props => {
  return(
    <>
      <Navbar/>
      <main className="mainContent">
      <Header/>
        <div className="container gridContainer">
          <Filmcard/>
          <Filmcard/>
          <Filmcard/>
          <Filmcard/>
          <Filmcard/>
          <Filmcard/>
          <Filmcard/>
          <Filmcard/>
          <Filmcard/>
          <Filmcard/>
        </div>
      </main>
      <Footer/>
    </>
  )
}


export default Layout
