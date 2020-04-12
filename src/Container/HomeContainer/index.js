import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CryptoList from './../../Component/CryptoList'

class HomeContainer extends Component {
  constructor(){
    super()
    this.state = {
      allCrypto: [],
      toggle: true
    }
  }

  componentDidMount(){
    this.getAllCrypto()
  }

  getAllCrypto = async() => {

  try{
    const response = await fetch(`https://api.coincap.io/v2/assets`);

    if(!response.ok){
      throw Error(response.statusText)
    }

    const cryptoParsed = await response.json()
    // console.log('data',  cryptoParsed.data);
    this.setState({
      allCrypto : cryptoParsed.data
    })

      }catch(err){
        return err
      }
   }

   changeView = async(e) => {
     return "border col-5 pd-1"
   }


  render(){
    return (
      <div className="border border-primary text-center">
        <h1 className="">Cryptocurrency</h1>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <button onClick={this.changeView}>
                {this.state.toggle ? 'ON' : 'OFF'}
              </button>
              <CryptoList allCrypto={this.state.allCrypto} changeView={this.changeView()}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContainer
