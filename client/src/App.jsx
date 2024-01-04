import React, { useEffect, useState } from 'react';
import ProductPage from './components/ProductPage';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import CartItems from './components/CartItems';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <React.Fragment>

    <div className='bg-blue-50  min-h-screen pt-5'>
      <SearchBar />

      <main className='flex'>
        <div className='  w-3/4'>
          <Categories setProducts={setProducts} />
          <div className='flex flex-wrap justify-center '>
            {products.map(product => (
              <div className='bg-blue-100 p-2 m-5 w-52 rounded-xl' key={product.ProductID}>
                <ProductPage product={product} cartItems={cartItems} setCartItems={setCartItems}/>
              </div>
            ))}
          </div>
        </div>
        <section className=' w-1/4'>
          <h1 className='mt-10 text-3xl text-center'> Cart </h1>  
           {cartItems &&  <CartItems cartItems={cartItems} />}
        </section>
      </main>

     
    </div>

    </React.Fragment>
    
  );
};

export default App;
