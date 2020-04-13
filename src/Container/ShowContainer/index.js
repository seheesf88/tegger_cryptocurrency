import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Nav from './../Nav';
import ShowComponent from './../../Component/ShowComponent'
import './../../../node_modules/react-vis/dist/style.css';
import {XYPlot, VerticalBarSeries, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, CircularGridLines, ChartLabel} from 'react-vis';

class ShowContainer extends Component {
  constructor(){
    super()
    this.state = {
      crypto: {},
      history: [],
      market : []
    }
  }

  componentDidMount(){
    this.getOneCrypto();
    this.getHistoryCrypto();
    this.getMarketCrypto();
  }

  getOneCrypto = async() => {
  var id = window.location.pathname.split('/')[1]

  try{
    const response = await fetch(`https://api.coincap.io/v2/assets/` + id);

    if(!response.ok){
      throw Error(response.statusText)
    }

    const cryptoParsed = await response.json()
    console.log('data',  cryptoParsed.data);
    this.setState({
      crypto : cryptoParsed.data
    })

      }catch(err){
        return err
      }
   }

   getHistoryCrypto = async() => {
   var id = window.location.pathname.split('/')[1]

   try{
     const response = await fetch(`https://api.coincap.io/v2/assets/` + id +`/history?interval=d1`);


     if(!response.ok){
       throw Error(response.statusText)
     }

     const cryptoParsed = await response.json()
     this.setState({
       // ...this.state,
       // price : cryptoParsed.data.priceUsd,
       // time : cryptoParsed.data.date
       history : cryptoParsed.data
     })

       }catch(err){
         return err
       }
    }


    getMarketCrypto = async() => {
    var id = window.location.pathname.split('/')[1]

    try{
      const response = await fetch(`https://api.coincap.io/v2/assets/` + id +`/markets`);


      if(!response.ok){
        throw Error(response.statusText)
      }

      const marketParsed = await response.json()

      this.setState({
        market : marketParsed.data

      })

        }catch(err){
          return err
        }
     }

  render(){
    const data = [];
    const date = [];
    let range = 0;

    let history = this.state.history.slice(this.state.history.length -30, this.state.history.length -1 )


    for(let i = 0; i < history.length; i++){
      let ele = history[i];
      let price = Number(ele.priceUsd).toFixed(2);
      // let time = ele.date.slice(0, 10);
      let time = new Date(ele.date.slice(0,10).split('-').join('/'));
      data.push({x:time, y:price})
      // console.log('+++++',time);
      // date.push(time)
      range += 1
    }
    // // console.log('this is market', this.state.market);
    // function exchangeMarket(arr){
    //   let marketData = [];
    //   // let markets = this.state.market;
    //   for(let i = 0; i < arr.length; i++){
    //     let market = arr[i];
    //     let exchange = market.exchangeId
    //     // marketData.push(exchange)
    //     return exchange
    //
    //   }
    //
    // }
    //
    // console.log(exchangeMarket(this.state.market));

    return (
      <div>
        <Nav />
        <div className="h1 text-center mt-5 mb-2">{String(this.state.crypto.id).toUpperCase() }</div>
      <div className="container">
        <div className="row">
          <XYPlot className="border" height={500} width={1100} margin={90}>
            <LineSeries data={data} />
            <VerticalGridLines tickTotal={[30]} />
              <HorizontalGridLines />
              <XAxis
              tickFormat={function tickFormat(x){
                  // console.log(x);
                  const date = new Date(x)
                  return date.toISOString().substr(0, 10)

                }}
              tickLabelAngle={-90}
              title={'Past 30days(day)'}
              />
              <YAxis
              title={'Price($USD)'}
              />
          </XYPlot>
        </div>

          <div className="row">
            <div className="col-5 container my-3 ml-1">
              <div className="h4 row p-3 border">Crypto Profile</div>
                <div className="row">
                  <div className="col-4">
                    <div className="mb-1">Id : </div>
                    <div className="mb-1">Name : </div>
                    <div className="mb-1">Rank : </div>
                    <div className="mb-1">Supply : </div>
                    <div className="mb-1">Max Supply : </div>
                  </div>
                  <div className="col-7 ml-1">
                    <div className="mb-1">{String(this.state.crypto.id)}</div>
                    <div className="mb-1">{this.state.crypto.name}</div>
                    <div className="mb-1">{this.state.crypto.rank}</div>
                    <div className="mb-1">{Number(this.state.crypto.supply).toFixed(2)}</div>
                    <div className="mb-1">{Number(this.state.crypto.maxSupply).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            <div className="col-5 ml-2 container border my-5 py-5">
              <div className="row">
                <div className="col-5">

                </div>
                <div className="col-5 offset-1"></div>
              </div>
            </div>
          </div>
        </div>



    </div>
    )
  }
}

export default ShowContainer


//
// for(let key in history){
//   let value = history[key];
//   let price = Number(value.priceUsd);
//   let time = new Date(value.date.slice(0,10).split('-').join('/'))
//   console.log('value', value);
//   // data.push({y : price,})
//   for(let i = 0; i < value.length; i++){
//     let ele = value[i]
//     obj.x = ele.price
//   }
// }
