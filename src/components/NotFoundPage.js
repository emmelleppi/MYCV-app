import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage () {
  return (
    <div>
      <h2>404 - <Link to='/'>Go home</Link></h2>
    </div>
  )
}

export default NotFoundPage
