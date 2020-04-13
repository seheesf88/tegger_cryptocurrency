import React from 'react';
import { Link } from 'react-router-dom'

const CryptoList = (props) => {
  console.log(props.changeView,"this is props")
    let card = 'border col-3 container pb-3';
  if(props.changeView){
    card = 'border col-3 container pb-3';
  }else{
    card = 'border col-4 container pb-3';
  }
  const allCrypto = props.allCrypto.map(crypto => {
    let icon = 'https://static.coincap.io/assets/icons/' + `${crypto.symbol.toLowerCase()}` + '@2x.png'
    let price = Number(crypto.priceUsd).toFixed(2);
    let changes = Number(crypto.changePercent24Hr).toFixed(2);

    return(
      <div className={`${card}`}>
        <div className="row py-4">
          <div className="col-4 offset-1 text-center">
            <img src={`${icon}`} style={{ height: 80, width: 80 }} onError={(e)=>{e.target.onerror = null; e.target.src="../no-camera.png"}}/>
          </div>
          <div className="col-4 offset-1">
            <div className="h5 pt-1">{crypto.symbol}</div>
            <div><Link to={`/${crypto.id}`}>{crypto.id}</Link></div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-8 h2"><span className="mr-1">$</span><span className="text-h3">{price}</span></div>
          <div className="col-4 pt-2">{changes >= 0 ?
              <span className="text-primary">{changes}<span className="ml-1">%</span></span> :
              <span className="text-danger">{changes}<span className="ml-1">%</span></span> }
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="container">
      <div className="row mx-1">
        {allCrypto}
      </div>
    </div>
  )
}

export default CryptoList
