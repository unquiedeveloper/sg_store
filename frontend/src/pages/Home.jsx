import React from 'react';

const Home = () => {
    const data = [
        {
            id: "01",
            name: "Total Products",
            number: "200"
        },
        {
            id: "02",
            name: "Total Products",
            number: "200"
        },
        {
            id: "03",
            name: "Total Products",
            number: "200"
        },
    ];

    return (
        <div className='bg-[#f1f4f5] p-4 flex flex-col md:flex-row'>
            {data.map(item => (
                <div key={item.id} className='bg-white w-[350px] h-[150px] p-4 m-2 shadow-lg rounded-xl'>
                    <h3 className='text-xl font-semibold'>{item.name}</h3>
                    <p className='text-gray-600'>{item.number}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
