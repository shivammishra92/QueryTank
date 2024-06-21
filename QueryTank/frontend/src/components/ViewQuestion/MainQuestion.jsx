import React, { useState,useEffect } from 'react'
import Header from '../Header/Header'
import Sidebar from '../LandingPage/Sidebar'
import {Link} from 'react-router-dom'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import HistoryIcon from '@mui/icons-material/History';
import { Avatar } from '@mui/material';
import ReactQuill from 'react-quill'
//using react-quill's css
import 'react-quill/dist/quill.snow.css'
import './css/Index.css'
import axios from 'axios'

// code for each individual question page where its complete information is shown along with answer and comments
function MainQuestion() {
    //use state for showing-not showing comments
    const [show,setShow] = useState(false)
    const [showans,setShowans] = useState(false)

    const [questionData,setQuestionData] = useState()
    let search = window.location.search
    const params = new URLSearchParams(search)
    const id = params.get("q")
    console.log(id)
    
    useEffect(()=>{
        async function getQuestionDetails(){
            await axios.get(`/api/question/${id}`)
            .then((res)=>{
                console.log(res.data[0])
                setQuestionData[res.data[0]]
            })
            .catch((error)=>{
                console.log("error showing individual question")
            })
        }
        getQuestionDetails()
    },[id])

    return (
        <>
            <div className="main">
                <div className="main-container">

                    <div className="main-top">
                        <h2>{questionData?.title ? questionData?.title : "No Title"}</h2>
                        <Link to='/ask-question'>
                            <button>Ask Question</button>
                        </Link>
                    </div>

                    <div className="desc">
                        <div className="info">
                            <p>Asked - <span>Timestamp</span></p>
                            <p>Active <span>today</span></p>
                            <p>Viewed <span>5 times</span></p>
                        </div>
                    </div>

                    <div className="all-questions">
                        <div className="all-question-container">

                            <div className="all-question-left">
                                <div className="side-options">
                                    <p className="arrow">▲</p>
                                    <p className="arrow">0</p>
                                    <p className="arrow">▼</p>
                                    <BookmarkBorderOutlinedIcon />
                                    <HistoryIcon />
                                </div>
                            </div>

                            <div className="question-answer">
                                <p>this is question body</p>
                                <div className="author">
                                    <small>asked</small>
                                    <div className="author-details">
                                        <Avatar />
                                        <p>Author name</p>
                                    </div>
                                </div>

                                <div className="comments">
                                    <div className="comment">
                                        <p>this is comment
                                          <span>Username</span>
                                          <small>Timestamp</small> 
                                        </p>
                                    </div>
                                    <p onClick={() => setShow(!show)}>Add a comment</p>
                                      {/* agar add comment par click ho tabhi comment section show ho */}
                                        {show && ( <div className="title">
                                            <textarea placeholder="Add your comment here" rows="5"></textarea>
                                            <button>Add comment</button>
                                        </div>
                                        )}
                                </div>

                            </div>
                        </div>
                    </div>


                     {/* now the bottom code is for answer tab following the same structure as question tab described above */}
                    <div className="all-questions">
                        <p>5 Answers</p>
                        <div className="all-question-container">

                            <div className="all-question-left">
                                <div className="side-options">
                                    <p className="arrow">▲</p>
                                    <p className="arrow">0</p>
                                    <p className="arrow">▼</p>
                                    <BookmarkBorderOutlinedIcon />
                                    <HistoryIcon />
                                </div>
                            </div>

                            <div className="question-answer">

                                <div className="author">
                                    <small>asked</small>
                                    <div className="author-details">
                                        <Avatar />
                                        <p>Author name</p>
                                    </div>
                                </div>

                                <div className="comments">
                                    <div className="comment">
                                        <p>this is comment
                                          <span>Username</span>
                                          <small>Timestamp</small> 
                                        </p>
                                    </div>
                                    <p onClick={() => setShowans(!showans)}>Add a comment</p>
                                      {/* agar add comment par click ho tabhi comment section show ho */}
                                        {show && ( <div className="title">
                                            <textarea placeholder="Add your comment here" rows="5"></textarea>
                                            <button>Add comment</button>
                                          </div>
                                        )}
                                </div>

                            </div>



                        </div>
                    </div>

                </div>
                {/* inside main but outside main-container (in this below tab u can add your answer) */}
                <div className="main-answer">
                    <h3>Your Answer</h3>
                    <ReactQuill className='react-quill' theme='snow' />
                </div>
                <button>Post Your Answer</button>
            </div>

        </>

    )
}

export default MainQuestion