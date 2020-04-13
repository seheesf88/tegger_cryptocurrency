import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CryptoList from './../../Component/CryptoList'
import Nav from './../Nav';

class HomeContainer extends Component {
  constructor(){
    super()
    this.state = {
      allCrypto: [],
      toggle: {toggle: true}
    }
   this.changeView = this.changeView.bind(this);
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

   changeView = async() => {
     try{
       console.log('toggle: ',this.state.toggle);
       this.setState(state => ({
         toggle: !state.toggle
       }));
     }catch(err){
       console.log(err);
       return err
     }

     // return "border col-5 pd-1"
   }


  render(){
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row mt-3 mb-4"><div className="display-3">Cryptocurrency</div></div>
          <div className="row container mt-5">
            <div className="row ml-1">
              <button
                onClick={this.changeView}
                className="btn btn-outline-dark"
              >
                {this.state.toggle ? <span className="px-1">3 Columns</span> : <span className="px-1">4 Columns</span>}
              </button>
            </div>
            <div className="row mt-3">
              <CryptoList allCrypto={this.state.allCrypto} changeView={this.state.toggle}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContainer
