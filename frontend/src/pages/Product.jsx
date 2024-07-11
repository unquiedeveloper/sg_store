import React, { useState } from 'react';

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const products = [
    { uniqueid: '1', name: 'T-shirt', brand: 'Polo', color: 'red', qty: 20, price: 200, size: 'S' },
    { uniqueid: '1', name: 'T-shirt', brand: 'Polo', color: 'red', qty: 20, price: 200, size: 'S' },
    { uniqueid: '1', name: 'T-shirt', brand: 'Polo', color: 'red', qty: 20, price: 200, size: 'S' },
    { uniqueid: '1', name: 'T-shirt', brand: 'Polo', color: 'red', qty: 20, price: 200, size: 'S' },

    // Add more product objects here...
  ];

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const displayedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="w-full p-4 overflow-x-auto">
      <div className="overflow-x-auto w-full max-w-screen">
        <div className=' flex mb-2 '>
          <div className='w-[50%]'></div>
          <div className='w-[50%] text-right'>
            <a href="/addproducts">
            
            <button className='bg-red-700 text-white px-4 py-1 font-meduim b-2 hover:bg-red-600'>Add+</button>
            </a>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
          <thead>
            <tr className='bg-black'>
              
            <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Uniqueid</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Brand</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Color</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Qty</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Price</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Size</th>
              
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {displayedProducts.map((product, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.uniqueid}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.name}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.brand}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.color}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.qty}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.size}</td>

                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="ml-3 inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                  >
                    Delete
                  </a>
                  <a
                    href="#"
                    className="ml-3 inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                  >
                    Update
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="inline-block rounded bg-gray-700 px-4 py-2 text-xs font-medium text-white hover:bg-gray-600"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">Page {currentPage} of {totalPages}</span>
        <button
          className="inline-block rounded bg-gray-700 px-4 py-2 text-xs font-medium text-white hover:bg-gray-600"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
