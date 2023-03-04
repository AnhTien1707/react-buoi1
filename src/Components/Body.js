import React, { Component } from 'react'
import Banner from './Banner'
import Items from './Items'
export default class Body extends Component {
  render() {
    return (
      <div className='container'>
        <div className='col-lg-12'>
            <Banner/>
        </div>
        <Items/>
      </div>
    )
  }
}
