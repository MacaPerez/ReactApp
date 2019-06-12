import React from "react"
import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"
import Filmcard from "./Filmcard"
import Details from "./Details"

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
          <Filmcard/>
          <Filmcard/>
          <Filmcard/>
          <Details/>
        </div>
      </main>
      <Footer/>
    </>
  )
}


export default Layout
