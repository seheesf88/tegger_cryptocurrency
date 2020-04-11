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

  //
  // getAllHouses = async() => {
  //   try{
  //     const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/allHouses`, {
  //       credentials: 'include'
  //     })
  //
  //     console.log('response is? ', response);
  //     if(!response.ok){
  //       throw Error(response.statusText)
  //     }
  //
  //     const responseParsed = await response.json();
  //     console.log('all houses responseParsed', responseParsed.data);
  //     this.setState({
  //       allHouses : responseParsed.data
  //     })
  //
  //   }catch(err){
  //     console.log('fetching getMyhouse fail');
  //   }
  // }
  //
  //
  //   //get my house
  //   getMyHouse = async() => {
  //     const userId = localStorage.getItem('userId');
  //     // const userId = localStorage.getItem('userId');
  //     console.log('what is u?????', userId);
  //     try{
  //       const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/house/`+ userId, {
  //         credentials: 'include'
  //       })
  //
  //       // console.log('response is? ', response);
  //       if(!response.ok){
  //         throw Error(response.statusText)
  //       }
  //
  //       const responseParsed = await response.json();
  //       console.log('responseParsed', responseParsed.data);
  //       this.setState({
  //         myHouses : responseParsed.data
  //       })
  //
  //     }catch(err){
  //       console.log('fetching getMyhouse fail');
  //     }
  //   }
  //
  //
  //
  //
  //   deleteHouse = async(id, e) => {
  //     // e.preventDefault();
  //     try {
  //       const deleteHouse = await fetch(`${process.env.REACT_APP_API}/api/v1/house/` + id, {
  //         method: 'DELETE',
  //         // credentials: 'include'
  //       })
  //
  //       // const parsedResponse = await deleteHouse.json();
  //
  //       this.setState({
  //         allHouses: this.state.allHouses.filter((house) => house._id !== id)
  //       })
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }



  render(){

    return (
      <div>
        예배하네
      </div>
    )
  }
}

export default HomeContainer
