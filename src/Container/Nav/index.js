import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CryptoList from './../../Component/CryptoList'

class HomeContainer extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  componentDidMount(){
  }



  render(){
    return (
      <div className="border bg-dark font-weight-bold">
        <ul className="nav justify-content-end py-3 pr-5">
          <li className="nav nav-item px-4">
            <div>
              <Link className="text-light" to="/">Home</Link>
            </div>
          </li>
          <li className="nav nav-item px-4">
            <div>
              <a href="https://github.com/seheesf88/tegger_cryptocurrency" className="text-light">Github</a>
            </div>
          </li>
          <li className="nav nav-item px-4">
            <div>
              <a href="https://www.linkedin.com/in/sehee-son/" className="text-light">LinkedIn</a>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default HomeContainer
