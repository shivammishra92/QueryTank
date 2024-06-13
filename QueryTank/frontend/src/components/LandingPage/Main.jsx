//This is the main body component
import React from 'react'
import { Link } from 'react-router-dom'
import FilterListIcon from '@mui/icons-material/FilterList';
import AllQuestions from './AllQuestions';
import './css/Main.css'

function Main({questions}) {
  return (
    <div className="main">
      <div className="main-container">

        <div className="main-top">
          <h2>All Questions</h2>
          <Link to="/ask-question">
            <button>Ask Question</button>
          </Link>
        </div>

        <div className="main-desc">
          <p>{questions && questions.length} Questions</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <Link>Newest</Link>
              </div>
              <div className="main-tab">
                <Link>Active</Link>
              </div>
              <div className="main-tab">
                <Link>More</Link>
              </div>
            </div>
            <div className="main-filter-icon">
              <FilterListIcon />
              <p>Filter</p>
            </div>
          </div>
        </div>

        <div className="all-questions">
          {
            questions?.map((question,index)=>{
              return(
              <>
                 <div key={index} className="question">
                   <AllQuestions  data = {question}/> 
                 </div>
              </>
            )}
            )
            }
        </div>

      </div>
    </div>
  )
}

export default Main