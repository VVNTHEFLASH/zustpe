import React, { Component } from 'react';
import Carousel from './Carousel';

export default class Home extends Component {
  render() {
    return (
        <>
        <div>
            <div className='center-align blue-text'>
                <h4>KKN Charity Trust</h4>
                <p>Made for <strong>Childrens</strong></p>
            </div>
            <div className='container'>
                <Carousel/>
            </div>
            <div className='row card-panel'>
                <blockquote className='red-text'> 
                    The One Who Takes Care of an Orphan, 
                    is with me in Paradise like this.
                </blockquote>
                <blockquote className='red-text'> 
                    Children without families are the most
                    vulnerable people in the world
                </blockquote>                
                <blockquote className='red-text'> 
                    Little By Little, Bit By Bit, Family By Family,
                    So Much Good Can Be Done On So Many Levels.
                </blockquote>
            </div>
        </div>
        </>
    )
  }
}
