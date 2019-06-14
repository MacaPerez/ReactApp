import React from 'react'
import Navbar from "./Navbar"
import Header from "./Header"
import Filmcard from "./Filmcard"

const Home = props => {
  return (
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
        </div>
      </main>
    </>
  )
}

export default Home
