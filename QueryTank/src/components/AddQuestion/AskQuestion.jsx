import React from 'react'
import Header from '../Header/Header'
import ReactQuill from 'react-quill'
//using react-quill's css
import 'react-quill/dist/quill.snow.css'
import { TagsInput } from "react-tag-input-component";
import './AskQuestion.css'

function AskQuestion() {
    return (
        <>
            <Header />

            <div className="add-question">
                <div className="add-question-container">
                    <div className="head-title">
                        <h1>Ask a question</h1>
                    </div>
                    <div className="question-container">
                        <div className="question-options">

                            <div className="question-option">
                                <div className="title">
                                    <h3>Title</h3>
                                    <small>Be specific while asking your question to others</small>
                                    <input type="text" placeholder='eg. How react router dom works in React...' />
                                </div>
                            </div>

                            <div className="question-option">
                                <div className="title">
                                    <h3>Body</h3>
                                    <small>Include all the information that someone need to answer your question</small>
                                    <ReactQuill className='react-quill' theme='snow'/>
                                </div>
                            </div>

                            <div className="question-option">
                                <div className="title">
                                    <h3>Tags</h3>
                                    <small>Add upto 5 tags that best describes your question</small>
                                    <input type="text" placeholder='tags' />
                                    {/* <TagsInput
                                            name="tags"
                                            placeHolder="enter"
                                    /> */}
                                </div>
                            </div>

                        </div>
                    </div>

                    <button className="button">
                        Add your question
                    </button>

                </div>
            </div>
            
        </>
    )
}

export default AskQuestion