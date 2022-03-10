import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ProductCard extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={this.props.img_url} alt={this.props.title} className="place-self-center"></img></figure>
        <div className="card-body justify-end">
          <h2 className="card-title">{this.props.title}</h2>
          {/* <p>{props.description}</p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    )
  }
}
