import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Posts from './components/Posts/Posts.jsx'
import CarouselPage from './components/CarouselPage/CarouselPage.jsx'
import Reels  from './components/Reels/Reels.jsx'
import PptPage from './components/PptPage/PptPage.jsx'


const router =  createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/posts',
    element:<Posts/>
  },{
    path: '/carousels',
    element:<CarouselPage/>
  },
  {
    path: '/reels',
    element:<Reels/>
  },
  {
    path: '/ppt',
    element:<PptPage/>
  },
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />  
</StrictMode>,
)
