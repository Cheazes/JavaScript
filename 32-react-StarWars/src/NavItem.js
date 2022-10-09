import React, { useContext } from 'react'
import { PageContext } from '../App'

const NavItem = ({itemTitle}) => {

  const {changePage} = useContext(PageContext)

  return (
    <li onClick={() => window.location.hash = `#/${itemTitle.route}`} className="nav-item btn btn-danger mx-1">
       
    {itemTitle.title}</li>
  )
}

export default NavItem