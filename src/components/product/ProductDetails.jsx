import { useParams } from 'react-router-dom';
import Product from './Product';

export default function ProductDetails() {
  const { productId } = useParams();
  const product = Product.find(p => p.id === productId);

 

  // Calculate the actual price for the product
  const actualPrice = product.price / (1 - product.discountPercentage / 100);

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-1  sm:px-6  lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">{product.title}</h2>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src={product.thumbnail}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
          <div className='flex gap-4'>
          <p className="mt-1 text-sm line-through  text-gray-500">${actualPrice.toFixed(2)}</p></div>
          <p className="mt-1 text-lg font-medium text-gray-900">{product.discountPercentage}% Off</p>
          <p className="mt-1 text-xs font-small text-gray-500">{product.brand}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
}