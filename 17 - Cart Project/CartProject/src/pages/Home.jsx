import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Spinner, Product } from '../components';

const API = "https://fakestoreapi.com/products";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(API);
      const output = await response.json();
      // console.log(output);
      setProducts(output);
    }
    catch(error) {
      toast.error("Failed to load Products");
      console.log("Failed to load Products");
      setProducts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProducts();
  },[]);

  return (
    <main className='max-w-6xl mx-auto flex justify-center items-center min-h-[88vh] pb-4'>
      {
        loading
         ?
         <Spinner /> 
         : 
         <section className='grid grid-cols-4'>
          {
            products.map( (item) => {
              return (
                <Product key={item.id} item={item} />
              )
            })
          }
         </section>
      }
    </main>
  )
}

export default Home