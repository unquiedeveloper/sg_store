import React , {useState} from 'react'

const Bill = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const employee = [
    {  customerName: 'Ayush', phoneNumber: 'ayush1@gmail.com',  address: "hfhgggbbgf" ,},
    {  customerName: 'Ayush',  phoneNumber: '86848940551',  address: "hfhgggbbgf"  },
    {  customerName: 'Ayush', phoneNumber: '86848940551',  address: "hfhgggbbgf"  },
    {  customerName: 'Ayush', phoneNumber: '86848940551',  address: "hfhgggbbgf" },

    // Add more product objects here...
  ];

  const totalPages = Math.ceil(employee.length / productsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const displayedProducts = employee.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  return (
    <div className="w-full p-4 overflow-x-auto">
      <div className="overflow-x-auto w-full max-w-screen ">
      <div className=' flex mb-2 '>
          <div className='w-[50%]'></div>
          <div className='w-[50%] text-right'>
            <button className='bg-red-700 text-white px-4 py-1 font-meduim b-2 hover:bg-red-600'>Add+</button>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
          <thead>
            <tr className='text-white bg-black'>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-white">customerName</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">phoneNumber</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">address</th>
              

              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {displayedProducts.map((employee, index) => (
              <tr key={index}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{employee.customerName}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{employee.phoneNumber}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{employee.address}</td>
              

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
  )
}

export default Bill