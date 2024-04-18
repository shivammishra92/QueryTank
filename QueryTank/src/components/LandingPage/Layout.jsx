import React from 'react'
import './css/Layout.css'
import Sidebar from './Sidebar'
import Main from './Main'
import AllQuestions from './AllQuestions'

function Layout() {
  return (
    <div className='query-index'>
        <div className="query-index-content">
            <Sidebar /> 
        </div>
        <div className="main-content">
           <Main />
        </div>
    </div>
  )
}

export default Layout