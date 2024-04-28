import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routs from './routs/Routs.jsx'
import FirebaseProvider from './firebaseProvider/FirebaseProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FirebaseProvider>  
  <RouterProvider router={routs}></RouterProvider>
  </FirebaseProvider>
  </React.StrictMode>,
)
