import React from 'react'
import './css/AllQuestions.css'
import { Avatar } from '@mui/material'
import {Link} from '@mui/material'

function AllQuestions() {
  return (
    <div className="individual-question">
      <div className="individual-question-container">

        <div className="left-bar">
          <div className="all-options">

              <div className="all-option">
                <p>0</p>
                <span>Votes</span>
              </div>

              <div className="all-option">
                <p>1</p>
                <span>Answers</span>
              </div>

              <div className="all-option">
                <small>0 views</small>
              </div>

          </div>
        </div>
        
        {/* middle part */}
        <div className="qNa-bar">
              <Link>This is the que title</Link>

              <div>//div for que description
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
            <p>UserName</p> //for username
          </div>
        </div>



      </div>
    </div>
  )
}

export default AllQuestions