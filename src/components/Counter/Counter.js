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
                {/* TODO: get count from state here */}
                <p className="counter-index">Count is: </p>
              </div>
              <div className="card-action">
                {/* TODO: setup increment/decrement methods here */}
                <button className="btn waves-effect waves-light pink darken-3 add">Add</button>
                <button className="btn waves-effect waves-light pink darken-3 subtract">Remove</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Counter