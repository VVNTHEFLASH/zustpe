import React, { Component } from 'react';
import "../App.css";

export default class Pricing extends Component {

    DonateNow = () => {
        alert("Payment Gateway Will be Added Soon!")
    }
  render() {
    return (
      <>
      <div className='container'>
        <div className='center-align blue-text'>
            <h4>Available Packages for Donation</h4>
            <p><strong>Pennies Make Pound</strong></p>
        </div>
        <div className='center-align' id='price-card'>
            <div className='card-panel black red-text' id='low-price'>
                <div>
                    <h5>Breakfast Package</h5>
                    <p>This Package can fulfill need of 50+ childs</p>
                </div>
                <div>
                    {/* <ul className='menu'>
                        Food Details
                        <li>Breakfast<strong>(1 day)</strong></li>
                        <li>Price:{" "}<strong>1499 INR</strong></li>
                    </ul> */}
                    <table>
                        <thead>
                            <tr>
                                <th>Food</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Breakfast</td>
                                <td>1499</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                <button className='green btn' onClick={this.DonateNow}>Donate Now</button>
                </div>
            </div>
            <div className='card-panel black red-text' id='medium-price'>
                <div>
                    <h5>Lunch & Dinner Package</h5>
                    <p>This Package can fulfill need of 200+ childs</p>
                </div>
                <div>
                    {/* <ul>
                        Food Details
                        <li>Lunch<strong>(1 day)</strong></li>
                        <li>Dinner<strong>(1 day)</strong></li>
                        <li>Price:{" "}<strong>15999 INR</strong></li>
                    </ul> */}
                    <table>
                        <thead>
                            <tr>
                                <th>Food</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lunch</td>
                                <td rowSpan={2}>15999</td>
                            </tr>
                            <tr>
                                <td>Dinner</td>
                            </tr>
                        </tbody>
                    </table> 
                </div>
                <div>
                <button className='green btn' onClick={this.DonateNow}>Donate Now</button>
                </div>
            </div>
            <div className='card-panel black red-text' id='high-price'>
                <div>
                    <h5>3 Times a Day Package</h5>
                    <p>This Package can fulfill need of 500+ childs</p>
                </div>
                <div>
                    {/* <ul className=''>
                        Food Details
                        <li>Breakfast<strong>(1 day)</strong></li>
                        <li>Lunch<strong>(1 day)</strong></li>
                        <li>Dinner<strong>(1 day)</strong></li>
                        <li>Price:{" "}<strong>54999 INR</strong>
                        </li>
                    </ul> */}
                    <table>
                        <thead>
                            <tr>
                                <th>Food</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Breakfast</td>
                                <td rowSpan={3}>54999</td>
                            </tr>
                            <tr>
                                <td>Lunch</td>
                            </tr>
                            <tr>
                                <td>Dinner</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                <button className='green btn' onClick={this.DonateNow}>Donate Now</button>
                </div>
            </div>
        </div>
      </div>
      </>
    )
  }
}
