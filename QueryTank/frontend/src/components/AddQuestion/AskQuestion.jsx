import React, { useState } from 'react'
import Header from '../Header/Header'
import ReactQuill from 'react-quill'
//using react-quill's css
import 'react-quill/dist/quill.snow.css'
import { TagsInput } from "react-tag-input-component";
import './AskQuestion.css'
import {useSelector} from "react-redux"
import axios from "axios"
import { useHistory } from "react-router-dom"


const user = useSelector(selectUser);

const[title,setTitle] = useState("")
const[body,setBody] = useState("")
const[tag,setTag] = useState([])
const[loading,setLoading] = useState(false)

const history = useHistory()
const handleQuill = (value) => {
      setBody(value)
}

const handleSubmit = async (e)=> {
    e.preventDefault()

    if(title !== "" && body !== ""){
        setLoading(true);
        const bodyJson = {
            title:tile,
            body:body,
            tag:JSON.stringify(tag),
            user:user
        }

        await axios
        .post('/api/question',bodyJson)
        .then((res)=>{
            setLoading(false);
            alert("Question added successfully")
            history.push("/")
        })
        .catch((error)=>{
            setLoading(false);
            console.log(error)
        })
    }

}

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
                                    <input value = {title} onChange={(e) => setTitle(e.target.value)}
                                     type="text" placeholder='eg. How react router dom works in React...' />
                                </div>
                            </div>

                            <div className="question-option">
                                <div className="title">
                                    <h3>Body</h3>
                                    <small>Include all the information that someone need to answer your question</small>
                                    <ReactQuill value={body} onChange={handleQuill}
                                    className='react-quill' theme='snow'/>
                                </div>
                            </div>

                            <div className="question-option">
                                <div className="title">
                                    <h3>Tags</h3>
                                    <small>Add upto 5 tags that best describes your question</small>
                                    <input value={tag} onChange={setTag}
                                    type="text" placeholder='tags' />
                                    {/* <TagsInput
                                            name="tags"
                                            placeHolder="enter"
                                    /> */}
                                </div>
                            </div>

                        </div>
                    </div>

                    <button disabled={loading} onClick={handleSubmit} className="button">
                        {loading ? "Adding question... " : "Add your question"}
                    </button>

                </div>
            </div>
            
        </>
    )
}

export default AskQuestion