import React from 'react';
import { Link } from 'react-router-dom'

const ShowComponent = (props) => {
  console.log(props);
  const allMarkets = props.allMarkets.map(market => {
    let exchangeMarket = market.exchangeId
    


    return(
      <div>
        <div>{}</div>
      </div>
    )
  })

  return (
    <div className="">
      <div className="">
        {allMarkets}
      </div>
    </div>
  )
}

export default ShowComponent
