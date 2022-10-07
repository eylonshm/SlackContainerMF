import React from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Header = () => (
  <div>
    <Link to='/'>home</Link>
    <br />
    <Link to='/react'>use react</Link>
  </div>
)

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <hr />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
