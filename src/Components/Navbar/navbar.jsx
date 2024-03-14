import React from 'react'

const navbar = () => {
  return (
    <div className='container-fluid change-color p-2'>
    <nav>
    <div className="logo">
    <img src="https://seeklogo.com/images/B/business-company-logo-32B09603F1-seeklogo.com.png" alt="" />
    </div>
   <button className='btn btn-danger'>Logout</button>
   </nav>  
   </div>
  )
}

export default navbar