import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import CreateAccount from './pages/createAccount/createAccount.tsx';
import Dashboard from './pages/dashboard/Dashboard.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'createAccount',
    element:<CreateAccount/>,
  },
  {
    path:'painel',
    element:<Dashboard/>,
  }
]) 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
