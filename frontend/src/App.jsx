import React from 'react';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Product from './pages/Product';
import Admin from './pages/Admin';
import Bill from './pages/Bill';
import Login from './pages/Login';
import CustomerHome from './pages/CustomerHome';

import Employeeregister from './components/Employeeregister';
import Adminregister from './components/Adminregister';
import Addproduct from './components/Addproduct';
import Employeedetail from './components/Employeedetail';
import Editemployee from './components/Editemployee';
function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="flex">
      <div className='w-[13%]'>
      <Sidebar />

      </div>
      <div className="w-[90%]">
       <Routes>
        {token ? (
        <Route path='/' element={<Home/>}/>
      ):( <Route path='/' element={<CustomerHome/>} />)}
        <Route path='/products' element={<Product/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/bill' element={<Bill/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/employee/register' element={<Employeeregister/>} />
        <Route path='/admin/register' element={<Adminregister/>} />
        <Route path='/addproducts' element={<Addproduct/>} />
        <Route path="/employeeview/:id" element={<Employeedetail/>} />
        <Route path='/employeeedit/:id' element={<Editemployee/>} />
      
       
      
        {/* <Route path='/contact' element={<Contact/>}/> */}

       </Routes>
      </div>
    </div>
  );
}

export default App;
