import React from 'react';
import { Link } from 'react-router-dom'

const CryptoList = (props) => {
  console.log(props.changeView,"this is props")
    let card = 'border col-4 pd-1';
  if(props.changeView){
    card = 'border col-3 pd-1';
  }else{
    card = 'border col-4 pd-1';
  }
  const allCrypto = props.allCrypto.map(crypto => {
    let icon = 'https://static.coincap.io/assets/icons/' + `${crypto.symbol.toLowerCase()}` + '@2x.png'
    let price = Number(crypto.priceUsd).toFixed(2);
    let changes = Number(crypto.changePercent24Hr).toFixed(2);

    return(
      <div className={`${card}`}>
        <div><Link to={`/${crypto.id}`}>{crypto.id}</Link></div>
        <div>{crypto.symbol}</div>
        <div><img src={`${icon}`} style={{ height: 50, width: 50 }} onError={(e)=>{e.target.onerror = null; e.target.src="../no-camera.png"}}/></div>
        <div><span className="mr-1">$</span>{price}</div>
        <div>{changes >= 0 ?
              <div className="text-primary">{changes}<span className="ml-1">%</span></div> :
              <div className="text-danger">{changes}<span className="ml-1">%</span></div> }</div>
        <div></div>
        <div></div>
      </div>
    )
  })

  return (
    <div className="container">
      <div className="row">
        {allCrypto}
      </div>
    </div>
  )
}

export default CryptoList
