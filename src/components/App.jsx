import React, { Component } from 'react';
import './App.css'
import FoodBox from './FoodBox'
import FoodData from './FoodData'
import Search from './Search'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
    }
  }
  handleSearch=(info)=>{
    this.setState({search:info})
  }
  handleCount =(value)=>{
    this.setState({count:value})
  }
  render() {
    return (
      <>
      <Search handleSearch={this.handleSearch}/>
        
        {
          FoodData.filter((el) => {
            if (this.state.search == "") {
              return el
            } else if (el.name.toLowerCase().includes(this.state.search.toLowerCase())) {
              return el
            }
          }).map((el) => {
            return (
              <div key={el.id}>
                <FoodBox food={el} count={this.state.count} />
              </div>
            )
          }) 
        }
      </>
    )
  }

}

export default App;
