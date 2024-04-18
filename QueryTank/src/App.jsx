import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/LandingPage/Layout.jsx'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  >
        <Route path='/' element={<Layout />}/>
        {/* <Route path='/' element={<Main />} /> */}
        {/* <Route path='contact' element={<Contact />} /> */}
      </Route>
    )
  )
  

  return (
    <>
     <div className="app">
       <Header />
       <RouterProvider router={router} />
     </div>
       
    </>
  )
}

export default App
