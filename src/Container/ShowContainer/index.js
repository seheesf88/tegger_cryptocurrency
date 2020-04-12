import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
//import CryptoList from './../../Component/CryptoList'
import './../../../node_modules/react-vis/dist/style.css';
import {XYPlot, VerticalBarSeries, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, CircularGridLines, ChartLabel} from 'react-vis';

class ShowContainer extends Component {
  constructor(){
    super()
    this.state = {
      crypto: {},
      history: []
    }
  }

  componentDidMount(){
    this.getOneCrypto()
    this.getHistoryCrypto()
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
     console.log('~~~',  cryptoParsed.data);
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

  render(){
    const data = [];
    // const date = [];
    let range = 0;

    let history = this.state.history.slice(this.state.history.length -30, this.state.history.length -1 )

    console.log('what is history',history);
    for(let i = 0; i < history.length; i++){
      let ele = history[i];
      let price = Number(ele.priceUsd).toFixed(2);
      console.log(price);
      let time = new Date(ele.date.slice(0,10).split('-').join('/'));
      data.push({x:range, y:price})
      console.log(time);
      range += 1
    }
    console.log(data);

    var margin = 90;
    return (
      <div className="border border-primary text-center pb-5 pl-5">
        <h1 className="">{this.state.crypto.id}</h1>
        <XYPlot className="border" height={500} width={1200} margin={100}>
          <LineSeries data={data} />
          <VerticalGridLines tickTotal={[30]} />
            <HorizontalGridLines />
            <XAxis
            tickFormat={function tickFormat(x){
                const date = new Date(x)
                return date.toISOString().substr(0, 10)}}
            tickLabelAngle={-90}
            title={'Past 30days(day)'}
            />
            <YAxis
            title={'Price($USD)'}
            />
        </XYPlot>

        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-5">
              <h3>Crypto Profile</h3>
              <div className="">
                <span>Id : </span><span>{this.state.crypto.id}</span>
              </div>
              <div className="">
                <span>Name : </span><span>{this.state.crypto.id}</span>
              </div>
              <div className="">
                <span>Rank : </span><span>{this.state.crypto.id}</span>
              </div>
              <div className="">
                <span>Supply : </span><span>{this.state.crypto.id}</span>
              </div>
              <div className="">
                <span>Max Supply : </span><span>{this.state.crypto.id}</span>
              </div>
            </div>
            <div className="col-5 border offset-1">
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
