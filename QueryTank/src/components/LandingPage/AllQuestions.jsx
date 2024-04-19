import React from 'react'
import './css/AllQuestions.css'
import { Avatar } from '@mui/material'
import {Link} from 'react-router-dom'

function AllQuestions() {
  return (
    <div className="individual-question">
      <div className="individual-question-container">

        <div className="left-bar">
          <div className="all-options">

              <div className="all-option">
                <p>0</p>
                <span>votes</span>
              </div>

              <div className="all-option">
                <p>1</p>
                <span>answers</span>
              </div>

              <div className="all-option">
                <small>0 views</small>
              </div>

          </div>
        </div>
        
        {/* middle part */}
        <div className="qNa-bar">
              <Link>This is the que title</Link>
              {/* div for que description */}
              <div>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Pariatur illum, recusandae quis
                corporis veritatis aperiam nam
                  quibusdam esse quo delectus,
                  expedita omnis accusamus ipsam.
              </div>

              <div >
                <span className="question-tag">React</span>
                <span className="question-tag">Redux</span>
                <span className="question-tag">Javascript</span>
              </div>
        </div>

        {/* right-bottom part */}
        <div className="author">
          <small>Timestamp</small>
          <div className="author-details">
            <Avatar />
            {/* //for username */}
            <p>UserName</p> 
          </div>
        </div>



      </div>
    </div>
  )
}

export default AllQuestions