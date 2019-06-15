import React from "react"
import { Route } from "react-router-dom"
import Home from "./components/Home"
import Details from "./components/Details"
import Search from "./components/Search"
import Popular from "./components/Popular"

const Routes = props => {
  return (
    <>
      <Route  path="/" exact component={Home} />
      <Route  path="/film-detail/:id" exact component={Details} />
      <Route  path="/search/:movie" exact component={Search} />
      <Route  path="/popular" exact component={Popular} />
    </>
  )
}

export default Routes
