import React from 'react'
import './css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header>

        <div className='header-container'>

          <div className="header-left">
            <Link to="/">
              <img 
              src='./src/images/query-tankNew.png'
              alt="logo" />
            </Link>
              <h3>About</h3>
              <h3>Product</h3>
              <h3>Contact Us</h3>
          </div>

          <div className="header-middle">
            <div className="header-search-container">
                 <SearchIcon />
                 <input type="text" placeholder='Search here...' />
            </div>
          </div>

          <div className="header-right">
            <Avatar />
          </div>

        </div>
        
    </header>
    
  )
}

export default Header