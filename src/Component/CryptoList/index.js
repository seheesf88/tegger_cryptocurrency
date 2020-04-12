import React from 'react';
import { Link } from 'react-router-dom'

const CryptoList = (props) => {
  console.log(props,"this is props")

  const allCrypto = props.allCrypto.map(crypto => {
    var clicked = () => {
      var result = "border col-3 my-1"
      console.log('---',result);
      return result
    }
    var hi = clicked()
    return(
      <div className={`${hi}`}>
       {crypto.id}
      </div>
    )
  })

  return (
    <div className="container border">
      <div className="">
        <h1>Report List</h1>
        <button>4 Row view</button>
      </div>
        <div className="row">
        {allCrypto}
        </div>
    </div>
  )
}

export default CryptoList
