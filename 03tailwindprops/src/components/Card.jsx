import { StrictMode } from 'react'
import propTypes from 'prop-types'

function Card({name, slogan, btnText= "Learn now!"}) {
    console.log("props: ", name);
    
  return (
    <StrictMode>
    <div className="card glass w-96">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" className="rounded-3xl"
        alt="car!" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-white font-bold">{slogan}</h2>
      <p className="text-white font-semibold">How to park your car at your garage?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary bg-blue-600 hover:bg-blue-800 mt-3">{btnText}</button>
      </div>
    </div>
  </div>
  </StrictMode>
  )
}

Card.propTypes = {
    name: propTypes.string.isRequired,
    slogan: propTypes.string.isRequired,
    btnText: propTypes.string.isRequired
}

export default Card