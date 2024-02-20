import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
   <>
     <nav className="bg-gray-800 p-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-white mr-4">Footer</span>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/cb"  className="text-white hover:text-gray-300" activeClassName="text-gray-300">Change Background</NavLink>
          </li>
         
        </ul>
      </div>
     
    </div>
  </nav>
   </>
  )
}

export default Footer
