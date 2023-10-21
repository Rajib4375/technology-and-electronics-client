import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Router/Route'
import Authprovider from './providers/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={myCreatedRoute}></RouterProvider>
   </Authprovider>
  </React.StrictMode>,
)
