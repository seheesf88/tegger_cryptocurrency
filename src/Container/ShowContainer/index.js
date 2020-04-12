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
//     const data = [
//   {y: 10.00, x: 1},
//   {y: 12.01, x: 2},
//   {y: 13.02, x: 3},
//   {y: 13.00, x: 4},
//   {y: 8.00, x: 5},
//   {y: 9.00, x: 6},
//   {y: 16.00, x: 7},
// ];
    const data = [];
    let range = 0;

    let history = this.state.history.slice(this.state.history.length -30, this.state.history.length -1 )
    for(let i = 0; i < history.length; i++){
      let ele = history[i];
      let price = Number(ele.priceUsd).toFixed(2);


      data.push({y:price, x:range})
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
