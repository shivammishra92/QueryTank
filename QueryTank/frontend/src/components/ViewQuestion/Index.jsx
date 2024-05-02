import React from 'react'
import './css/Index.css'
import Sidebar from '../LandingPage/Sidebar'
import {Header} from '../LandingPage/ind'
import MainQuestion from './MainQuestion'


function Index() {
  return (
    <>
    <Header/>
    <div className='query-index'>
        <div className="query-index-content">
            <Sidebar /> 
        </div>
        <div className="main-content">
           <MainQuestion />
        </div>
    </div>
    </>
  )
}

export default Index