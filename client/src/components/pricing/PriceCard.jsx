import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <h2>{val.name}</h2>
          <h3>
            <span></span>
            {val.price}
          </h3>
          <h4>{val.desc}</h4>
          
        </div>
      ))}
    </>
  )
}

export default PriceCard
