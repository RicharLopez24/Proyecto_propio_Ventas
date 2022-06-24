import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Navbar.css'
import { auth } from '../Firebase/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar } from '@mui/material';
import { signOut } from 'firebase/auth';

function Navbar() {

  const [sidebar, setSidebar] = useState(false)
  let navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar)
  const logOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/", { replace: true })
      window.location = "/ventas"

    }).catch((error) => {
      // An error happened.
    });
  }



  const [user] = useAuthState(auth)
  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <MenuIcon onClick={showSidebar} />
          </Link>

          <div className='info'>
            <h1 className='ventas'>Venta de productos</h1>


            <div className='foto'>
              <Avatar src={user.photoURL}
                onClick={logOut}
                className='avatar'
              >

              </Avatar>
            </div>

            {user.displayName}
          </div>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <CloseIcon />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.link}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar