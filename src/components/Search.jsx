import React, { Component } from 'react'
import './App.css'
export default class Search extends Component {
  render() {
    return (
      <div>
        <div id='search'>
          <input id='food_search' type="text" placeholder='Enter Something' onChange={(e) => this.props.handleSearch(e.target.value)} />
        </div>
      </div>
    )
  }
}
