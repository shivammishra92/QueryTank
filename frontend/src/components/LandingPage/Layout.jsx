import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import './css/Layout.css'
import Sidebar from './Sidebar'
import {Header} from './ind'
import Main from './Main'
import AllQuestions from './AllQuestions'

//starting point -> home page where all questions are shown
function Layout() {

 const [questions, setQuestions] = useState([])

  // useEffect(() => {
  //   async function getQuestion() {
  //     await axios.get("http://localhost:5000/api/question").then((res) => {
  //       setQuestions(res.data.reverse());
  //       // console.log(res.data)
  //       });
  //       }
  //       getQuestion();
  // }, []);




  useEffect(() => {
    async function getQuestion() {
      try {
        const res = await axios.get("http://localhost:5000/api/question/");
        console.log("Response data:", res.data);
        if (Array.isArray(res.data)) {
          setQuestions(res.data.reverse());
        } else {
          console.error("Expected an array but got:", res.data);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }
    getQuestion();
  }, []);

  // console.log(questions)
  

  return (
    <>
    <Header/>
    <div className='query-index'>
        <div className="query-index-content">
            <Sidebar /> 
        </div>
        <div className="main-content">
           <Main questions={questions}/>
        </div>
    </div>
    </>
  )
}

export default Layout