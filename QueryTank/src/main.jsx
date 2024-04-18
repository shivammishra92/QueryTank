import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {
  Sidebar,
} from "./components/LandingPage/ind.jsx"




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)