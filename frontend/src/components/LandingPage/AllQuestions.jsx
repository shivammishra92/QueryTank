import React from 'react'
import './css/AllQuestions.css'
import { Avatar } from '@mui/material'
import {Link} from 'react-router-dom'
import ReactHtmlParser from "html-react-parser"


function AllQuestions({data}) {
  // console.log(data?.body); 
  //const bodyContent = typeof data?.body === 'string' ? data.body : '';
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }
  
  const tags = [];
  //let tags = JSON.parse(data?.tags[0]);

  //  let tags;
  // try {
  //   if (data?.tags && Array.isArray(data.tags) && data.tags[0]) {
  //     tags = (data.tags);
  //   } else {
  //     throw new Error("Invalid input data");
  //   }
  // } catch (error) {
  //   console.error("Failed to parse tags:", error.message);
  //   tags = []; // Default to an empty array or handle the error as needed
  // }

  // Proceed with using 'tags'
  //console.log(tags);
  // console.log(questions)


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
              <div className='link'>
                <Link to={`/question?q=${data?._id}`}>
                  {data?.title ? data?.title : "Title Not found"}
                </Link>
              </div>
              
              {/* div for que description */}
              <div>
                {ReactHtmlParser(truncate(data.body, 200))}
                {/* {data?.body ? truncate(data?.body) : "No body"} */}
              </div>

              <div>
              {tags.map((_tag) => (
              <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {_tag}
              </p>
            ))}
              </div>
        </div>

        {/* right-bottom part */}
        <div className="author">
          <small>
          { new Date(data?.createdAt).toLocaleString([], {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12:false
          })
          }
          </small>
          <div className="author-details">
            <Avatar />
            {/* //for username */}
            <p>{data?.user?.displayName ? data?.user?.displayName : "Anonymous"}</p> 
          </div>
        </div>



      </div>
    </div>
  )
}

export default AllQuestions