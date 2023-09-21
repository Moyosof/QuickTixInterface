import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ProtectedPage = () => {
  return (
    <div>
    <header className="header">
 <div>
   <Link to="/" className="logo">
     QuickTix
   </Link>
 </div>
 <div className="search-container">
   <input type="text" placeholder="Search by Event" className="search-input" />
 </div>
 <UserButton/>
</header>

</div>
  )
}

export default ProtectedPage