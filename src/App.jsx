/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css';
import {BrowserRouter,RouterProvider,Route,Link, createBrowserRouter} from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/login';
import Navbar from './components/Navbar';
import Head from "./components/Head"
function App() {
  const router = createBrowserRouter([
    {
      path : "/signup",
      element : <><SignUp/></>
    },
    {
      path : "/login",
      element : <><Login/></>
    },
    {
      path : "/",
      element : <><Login/></>
    }
  ])
  return (
     <>
      <RouterProvider router={router}/>
     </>
  )
}

export default App
