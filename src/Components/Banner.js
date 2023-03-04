import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div className="container py-5 ">
                <div className="p-4 p-lg-5 bg-light text-center">
                    <h5 className="card-title fw-bold display-5">A warm welcome!</h5>
                    <p className="card-text fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                    <a  className="btn btn-primary btn-lg">Call to action</a>
                </div>
            </div>
      </div>
    )
  }
}
