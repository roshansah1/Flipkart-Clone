import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = () => {
  const navigate = useNavigate()
  return (
    <>
      {navigate('/Flipkart-Clone')}
    </>
  )
}

export default ProtectedRoutes