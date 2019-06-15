import React from "react"
import { Route } from "react-router-dom"
import Home from "./components/Home"
import Details from "./components/Details"
import Search from "./components/Search"

const Routes = props => {
  return (
    <>
      <Route  path="/" exact component={Home} />
      <Route  path="/film-detail/:id" exact component={Details} />
      <Route  path="/search/:movie" exact component={Search} />
    </>
  )
}

export default Routes
