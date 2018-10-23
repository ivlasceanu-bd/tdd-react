import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }


  increment = () => {
    this.setState( prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  decrement = () => {
    this.setState( prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }

  render() {
    return (
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card grey lighten-3">
              <div className="card-content">
                <span className="card-title">Counter component</span>
                <p className="counter-index">Count is: {this.state.count}</p>
              </div>
              <div className="card-action">
                <button className="btn waves-effect waves-light pink darken-3 add" onClick={ this.increment }>Add</button>
                <button className="btn waves-effect waves-light pink darken-3 subtract" onClick={ this.decrement }>Subtract</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Counter