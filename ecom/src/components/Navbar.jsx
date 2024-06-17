import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CartCountSlice from '../Feature/CartCountSlice'
import { increment } from '../Feature/CartCountSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const select = useSelector((state) => state.count.value)
  return (
    <>
      <nav className='nav' >
        <ul>
          <li><Link to='/' className='link' >Home</Link ></li>
          <li><Link to='/Cart' className='link' >Cart Items :{select}</Link></li>
        
        </ul>
      </nav>
    </>
  )
}

export default Navbar
