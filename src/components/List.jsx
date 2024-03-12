import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.count} {this.props.name} = {this.props.totalAmount} Calories</h1>
      </div>
    )
  }
}
