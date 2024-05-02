import React from 'react'
import './css/Layout.css'
import Sidebar from './Sidebar'
import {Header} from './ind'
import Main from './Main'
import AllQuestions from './AllQuestions'

function Layout() {
  return (
    <>
    <Header/>
    <div className='query-index'>
        <div className="query-index-content">
            <Sidebar /> 
        </div>
        <div className="main-content">
           <Main />
        </div>
    </div>
    </>
  )
}

export default Layout