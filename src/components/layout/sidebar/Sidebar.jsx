import React from 'react'
// import './sidebar.css'
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../../constants/textConstants';
const { Sider } = Layout;
 
const Sidebar = () => {
  return (
    <div>
      <Sider class=" bg-[#f1f8ff] text-lg font-semibold mt-[70px] sider w-[189px] h-screen pl-[22px] text-[18px] " >
        <br />
        <Link className="text-[#014D4E] block mb-2" to="/admindashboard">
          {ROUTE_CONSTANTS.ADMIN_DASHBOARD}
        </Link>

        <Link className="text-[#014D4E] block mb-2" to="/reporting">
          {ROUTE_CONSTANTS.SUPPLIER_SEARCH}
        </Link>
        
      </Sider>
    </div>
  )
}
 
export default Sidebar