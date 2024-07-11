import React from 'react';

const Admin = () => {
  return (
    <div className="w-full p-4 overflow-x-auto">
      <div className="overflow-x-auto  w-full">
      <div className=' flex mb-2 '>
          <div className='w-[50%]'></div>
          <div className='w-[50%] text-right'>
            <a href="/admin/register">
            <button className='bg-red-700 text-white px-4 py-1 font-meduim b-2 hover:bg-red-600'>Add+</button>
            
            </a>
          </div>
        </div>
        <table className="min-w-full divide-y-2 w-full divide-gray-200 bg-white text-sm">
          <thead className="bg-gray-50">
            <tr className='bg-black '>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Email</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Phone</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-10 py-2 font-medium text-gray-900">Ayush2</td>
              <td className="whitespace-nowrap px-10 py-2 text-gray-700">ayush89@gmail.com</td>
              <td className="whitespace-nowrap px-10 py-2 text-gray-700">8684894051</td>
              <td className="whitespace-nowrap px-10 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                >
                  View
                </a>
                <a
                  href="#"
                  className="ml-4 inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                >
                  Delete
                </a>
                <a
                  href="#"
                  className="ml-4 inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                >
                  Update
                </a>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-16 py-2 font-medium text-gray-900">Ayush2</td>
              <td className="whitespace-nowrap px-16 py-2 text-gray-700">ayush89@gmail.com</td>
              <td className="whitespace-nowrap px-16 py-2 text-gray-700">8684894051</td>
              <td className="whitespace-nowrap px-16 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                >
                  View
                </a>
                <a
                  href="#"
                  className="ml-4 inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                >
                  Delete
                </a>
                <a
                  href="#"
                  className="ml-4 inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                >
                  Update
                </a>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-10 py-2 font-medium text-gray-900">Ayush2</td>
              <td className="whitespace-nowrap px-10 py-2 text-gray-700">ayush89@gmail.com</td>
              <td className="whitespace-nowrap px-10 py-2 text-gray-700">8684894051</td>
              <td className="whitespace-nowrap px-10 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                >
                  View
                </a>
                <a
                  href="#"
                  className="ml-4 inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                >
                  Delete
                </a>
                <a
                  href="#"
                  className="ml-4 inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                >
                  Update
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
