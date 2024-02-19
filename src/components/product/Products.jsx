import { useState } from 'react';
import Product from './Data.js'
import { Link } from 'react-router-dom';
import {  ShoppingBagIcon , PlusIcon , CheckIcon } from '@heroicons/react/24/solid'

export default function Products() {
  const [displayedProducts] = useState(Product.slice(0, 20));
 const [isMinus, setIsMinus] = useState({});


   const toggleButton = (productId) => {
    setIsMinus(prevState => ({
      ...prevState,
      [productId]: !prevState[productId]
    }));
  };

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-1  sm:px-6  lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {displayedProducts.map((product) => {
            // Calculate the actual price for each product
            const actualPrice = product.price / (1 - product.discountPercentage / 100);
            {/* TODO: to={`/products/${product.id}`} Fix This ISSUE */ }
            const isMinusActive = isMinus[product.id];
            return (
              <div key={product.id} className="group p-2 border rounded  hover:shadow-lg duration-500">
              <Link  to="*" >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.thumbnail}
                    alt={product.imageAlt}
                    className="h-32 w-full object-cover object-center "
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                <div className='flex gap-4'><div><p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                  <p className="mt-1 text-sm line-through  text-gray-500">${actualPrice.toFixed(2)}</p></div>
                  <p className="mt-1 text-[14px]  text-gray-900">{product.discountPercentage}% Off</p>
                </div>
                  <p className="mt-1 text-xs font-small text-gray-500">{product.brand}</p>
                  </Link>
                <div className='flex justify-between items-center '>
                 <button className='bg-orange-600 flex gap-4 p-2 items-center   rounded text-white hover:bg-orange-500 sm:w-40 w-28  text-[10px] font-semibold sm:text-[1rem] sm:justify-between mt-10'><p>Add To Cart</p>
                 <ShoppingBagIcon className="h-6 w-4 sm:w-8" aria-hidden="true"/>
                  </button>



                  <button onClick={() => toggleButton(product.id)} className='mt-10 justify-center flex flex-col text-center text-orange-600 hover:text-red-600 items-center duration-600'>
                  
                   {isMinusActive  ? (
        <CheckIcon  className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <PlusIcon className="block h-6 w-6" aria-hidden="true" />
      )}
                    
               {}
                  
                  </button>
                  
                </div>
                
              
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
