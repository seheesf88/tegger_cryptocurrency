import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CryptoList from './../../Component/CryptoList'

class HomeContainer extends Component {
  constructor(){
    super()
    this.state = {
      allCrypto: []
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


  render(){
    return (
      <div className="container border">
        <div className="row mt-5">
          <div>
          <CryptoList allCrypto={this.state.allCrypto}/>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContainer
