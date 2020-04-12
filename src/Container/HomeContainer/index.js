import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class HomeContainer extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
  }





  render(){

    return (
      <div className="container">
        <div className="row ml-6">Find my crypto</div>
        <input className="form-control"/>
        <button className="btn btn-primary">Search</button>
      </div>
    )
  }
}

export default HomeContainer
