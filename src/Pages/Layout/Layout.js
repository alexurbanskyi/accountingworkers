import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Elements/Header/Header'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        Footer
    </div>
  )
}

export default Layout