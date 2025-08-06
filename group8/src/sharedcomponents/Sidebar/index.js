import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTachometerAlt,
  FaStore,
  FaDollarSign,
  FaTruck,
  FaMoneyBill,
  FaUserCircle,
  FaBars,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./style.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setCollapsed((prev) => !prev);


  const activeStyle = {
    fontWeight: "bold",
    color: "#2C6E49",
  };

  const baseNavItemClass = "nav-item";

  return (
    <aside className={`dashboard-sidebar${collapsed ? " collapsed" : ""}`}>
      <div className="sidebar-header">
        <button
          className="collapse-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <FaBars />
        </button>
      </div>

      {!collapsed && (
        <div className="profile-section">
          <FaUserCircle className="profile-icon" />
          <h2 className="profile-name">iRECYCLE</h2>
          <p className="profile-role">Admin</p>
        </div>
      )}

      <nav className="nav-section" aria-label="Sidebar navigation">
 
      

      
        <div className="nav-group">
          {!collapsed && <p className="nav-group-title">MENU</p>}

        

          <NavLink
            to="/marketplace"
            className={({ isActive }) =>
              baseNavItemClass + (isActive ? " active" : "")
            }
    
            tabIndex={0}
          >
            <FaStore className="nav-icon" />
            {!collapsed && <span>MarketPlace</span>}
          </NavLink>

          <NavLink
            to="/price-catalog"
            className={({ isActive }) =>
              baseNavItemClass + (isActive ? " active" : "")
            }
   
            tabIndex={0}
          >
            <FaDollarSign className="nav-icon" />
            {!collapsed && <span>Price Catalog</span>}
          </NavLink>

          <NavLink
            to="/pickup"
            className={({ isActive }) =>
              baseNavItemClass + (isActive ? " active" : "")
            }
       
            tabIndex={0}
          >
            <FaTruck className="nav-icon" />
            {!collapsed && <span>Pickup Scheduling</span>}
          </NavLink>

          <NavLink
            to="/payment"
            className={({ isActive }) =>
              baseNavItemClass + (isActive ? " active" : "")
            }

            tabIndex={0}
          >
            <FaMoneyBill className="nav-icon" />
            {!collapsed && <span>Payment</span>}
          </NavLink>


          <NavLink
            to="/"
            className={({ isActive }) =>
              baseNavItemClass + (isActive ? " active" : "")
            }
            tabIndex={0}
          >
            <FaSignOutAlt className="nav-icon" />
            {!collapsed && <span>Log Out</span>}
          </NavLink>

         
        </div>

   

     
      </nav>
    </aside>
  );
};

export default Sidebar;
