import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../Redux/Ducks/Products';
import ProductCard from './ProductCard';

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const products = useSelector((state) => state.products.products)

  console.log(products)
  
  return (
    <div className='grid grid-cols-4 gap-4 p-4 bg-accent'>
      {products? products.map((product)=>(<ProductCard title={product.title} img_url={product.image} description={product.description}></ProductCard>)): <h1>Cannot retrive products</h1>}
    </div>
  )
}

export default Products