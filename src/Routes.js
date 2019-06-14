import React from "react"
import { Route } from "react-router-dom"
import Home from "./components/Home"
import Details from "./components/Details"

const Routes = props => {
  return (
    <>
      <Route  path="/" exact component={Home} />
      <Route  path="/film-detail" exact component={Details} />
    </>
  )
}

export default Routes
