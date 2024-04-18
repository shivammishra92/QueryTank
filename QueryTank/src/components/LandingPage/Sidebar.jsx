import React from 'react'
 import "./css/Sidebar.css";
import PublicIcon from '@mui/icons-material/Public'
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';



function Sidebar() {
  return (
       
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">

          <div className="sidebar-option">
             <div className="link-tag">
              <HomeIcon />
              <Link to="/">Home</Link>
             </div>
             
          </div>

          <div className="sidebar-option">
            <p>PUBLIC</p>
            <div className="link">
              <div className="link-tag">
                <PublicIcon />
                <Link to="/">Question</Link>
              </div>
              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>

          <div className="sidebar-option">
            <p>LABS</p>
            <div className="link">
              <div className="link-tag">
                <ChatIcon />
                <Link to="/">Discussions</Link>
              </div>
            </div>
          </div>

          <div className="sidebar-option">
            <p>Users</p>
            <div className="link-tag">
                <GroupIcon />
                <Link to="/">Users</Link>
            </div>
          </div>

          <div className="sidebar-option">
            <p>TEAMS</p>
            <div className="link-tag">
              <WorkIcon />
              <Link to="/">Companies</Link>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Sidebar