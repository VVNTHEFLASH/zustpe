import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
import "../App.css"

export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="white red-text">
      <div className='container col'>
        <img src={require("../resources/logo/KKN logo.jpg")} alt="logo" className='left' id='logo' />
        <ul className='row'>
            <Link to="/home">
            <li className='col red-text l2'>Home</li>
            </Link>
            <Link to="/pricing">
            <li className='col red-text l2'>Pricing</li>
            </Link>
            <Link to="/feedback">
            <li className='col red-text l2'>Feedback</li>
            </Link>
            <Link to="/aboutus">
            <li className='col red-text l2'>About Us</li>
            </Link>
        </ul>
      </div>
      </nav>

      </>
    )
  }
}
