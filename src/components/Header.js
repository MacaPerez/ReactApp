import React from "react"

const Header = props => {
  return (
    <header className="container text-center text-dark">

      <h1 className="mb-3">{props.title}</h1>

      <p>{props.subtitle}</p>
      
      <p>
        <span className="emoji" role="img" aria-label={props.altText1}>{props.emoji1}</span>
        <span className="emoji" role="img" aria-label={props.altText2}>{props.emoji2}</span>
        <span className="emoji" role="img" aria-label={props.altText3}>{props.emoji3}</span>
      </p>

      <h2 className="secondTitleCustom ml-lg-3 mt-md-5">{props.secondTitle}</h2>

    </header>

  )
}

export default Header
