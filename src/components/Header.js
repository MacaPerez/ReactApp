import React from "react"

const Header = props => {
  return (
    <header className="container text-center text-dark">
      <h1 className="mb-3">{props.title}</h1>
      <p>{props.subtitle}</p>
      <p>
      <span className="emoji" role="img" aria-label="Film frame">🎞️ </span>
      <span className="emoji" role="img" aria-label="Popcorn box">🍿 </span>
      <span className="emoji" role="img" aria-label="Nerd face">🤓</span>
      </p>
      <h2 className="text-left text-info display9 ml-lg-3 mt-5 mb-3">Estas son alguna de las películas mejor valoradas..</h2>
    </header>

  )
}

export default Header
