import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ProductCard from './ProductCard'
import { getProducts } from '../redux/ducks/Products'
import { connect } from 'react-redux';

class Products extends Component {
  static propTypes = {}

  componentDidMount(){
    this.props.getProducts()
  }

  render() {
    return (
      <div className='grid grid-cols-4 gap-4 p-4 bg-accent'>
        {this.props.products.products? this.props.products.products.map((product)=>(<ProductCard title={product.title} img_url={product.image} description={product.description}></ProductCard>)): <h1>Cannot retrive products</h1>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = () => {
  return {
    getProducts
  }
}



export default connect(mapStateToProps, mapDispatchToProps())(Products)