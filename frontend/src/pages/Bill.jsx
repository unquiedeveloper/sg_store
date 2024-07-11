import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const Bill = () => {
  const [getuserdata, setUserdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const totalPages = Math.ceil(getuserdata.length / productsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const getBillData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/bill/getall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      // Ensure 'bill' key exists and contains an array
      if (Array.isArray(data.bill)) {
        setUserdata(data.bill);
      } else {
        toast.error("Invalid data received from server.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch bill data. Please try again.");
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    getBillData();
  }, []);

  const displayedProducts = getuserdata.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="w-full p-4 overflow-x-auto">
      <div className="overflow-x-auto w-full max-w-screen">
        <div className="flex mb-2">
          <div className="w-[50%]"></div>
          <div className="w-[50%] text-right">
            <button className="bg-red-700 text-white px-4 py-1 font-medium hover:bg-red-600">Add+</button>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
          <thead>
            <tr className="text-white bg-black">
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Customer Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Phone Number</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Address</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {displayedProducts.map((bill, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{bill.customerName}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{bill.phoneNumber}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{bill.address}</td>
                <td className="whitespace-nowrap px-4 py-2 flex space-x-2">
                  <a
                    href="#"
                    className="rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                  >
                    Delete
                  </a>
                  <a
                    href="#"
                    className="rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
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

export default Bill;
