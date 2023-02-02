import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios';
const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`;
const Products = ({ category, filters, sort }) => {
  console.log(filters);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log('before : ',filteredProducts);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(category ? `http://localhost:5000/api/products?category=${category}` : 'http://localhost:5000/api/products')
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {
        
      }
    }; getProducts();
  }, [category]);
  
  useEffect(() => {
    console.log('change');
    category && setFilteredProducts(
      products.filter((item) => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      ))
    ); console.log('after : ',filteredProducts);
  }, [products, category, filters]);
  
  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }

  },[sort]);
  return (
    <Container>
          {category? filteredProducts.map(item => (
              <Product key={item._id} item={item} />
          )) : products
            .slice(0.8)
            .map(item => (
              <Product key={item._id} item={item} />
        ))}
    </Container>
  )
}

export default Products