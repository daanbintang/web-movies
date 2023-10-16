import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Popular from './routes/Popular'
import MovieDetail from './routes/MovieDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/popular",
    element: <Popular />
  },
  {
    path: "movies/:id",
    element: <MovieDetail />
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
