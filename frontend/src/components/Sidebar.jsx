import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import DialpadOutlinedIcon from '@mui/icons-material/DialpadOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';

const Sidebar = () => {
  const adminToken = localStorage.getItem('adminToken');
  const employeeToken = localStorage.getItem('employeeToken');
  const adminName = localStorage.getItem('adminName');
  const employeeName = localStorage.getItem('employeeName');

  const logoutHandler = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('employeeToken');
    localStorage.removeItem('adminName');
    localStorage.removeItem('employeeName');
    window.location.reload();
  };

  const isAdmin = !!adminToken;
  const isEmployee = !!employeeToken;
  const fullname = isAdmin ? adminName : employeeName;

  return (
    <div className="h-screen w-60 bg-gray-800 text-white fixed">
      <div className="p-4 text-4xl my-5 font-bold">
        SG Store
      </div>
      <nav className="mt-4">
        <ul className="text-xl">
          {(isAdmin || isEmployee) ? (
            <>
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link to="/"><HomeIcon className="mx-3" /> Home</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link to="/products"><InfoOutlinedIcon className="mx-3" />Products</Link>
              </li>
              {isAdmin && (
                <>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <Link to="/services"><ManageAccountsOutlinedIcon className="mx-3" />Employee</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <Link to="/admin"><AdminPanelSettingsOutlinedIcon className="mx-3" />Admin</Link>
                  </li>
                </>
              )}
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link to="/bill"><AddCardOutlinedIcon className="mx-3" />Bill</Link>
              </li>
            </>
          ) : (
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="/"><HomeIcon className="mx-3" /> Home</Link>
            </li>
          )}
        </ul>
      </nav>
      {(isAdmin || isEmployee) ? (
        <div className="mt-4 mx-7 absolute bottom-5">
          <div className="mx-2 text-2xl my-8 font-semibold">{fullname}</div>
          <button className="px-4 py-2 text-xl text-white bg-red-800 rounded-lg" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      ) : (
        <div className="mt-4 mx-7 absolute bottom-5">
          <Link to="/login">
            <button className="px-4 py-2 text-xl text-white bg-blue-800 rounded-lg">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
