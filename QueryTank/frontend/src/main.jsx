import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header/Header.jsx'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/LandingPage/Layout.jsx'
import AskQuestion from './components/AddQuestion/AskQuestion.jsx'
import MainQuestion from './components/ViewQuestion/MainQuestion.jsx'
import Index from './components/ViewQuestion/Index.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  >
      <Route path='/' element={<Layout />} />
      <Route path='/ask-question' element={<AskQuestion />} />
      {/* Index -> routing to the individual question page */}
      <Route path='/question' element={<Index />} /> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
