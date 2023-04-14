import React from 'react';
import { Container, Row, Button} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import './header.css';

const nav_links = [
  {
    path: '/home',
    display: 'Home',
  },

  {
    path: '/about',
    display: 'About',
  },

  {
    path: '/tours',
    display: 'Tours',
  },

]

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className='nav_wrapper d-flex align-items-center
          justify-content-between'>
            {/*=============LOGO============ */}
            <div className='logo'>
               <img src={Logo} alt='' />
            </div>
            {/*=============LOGO  END============ */}
            {/*=============MENU START============ */}
            <div className='navigation'>
              <ul className='menu d-flex align-items-center gap-5'>
                {
                  nav_links.map((item, index) => (
                    <li style={{listStyleType: 'none'}} className='nav_item' key={index}>
                        <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link' : ''}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/*=============MENU  END============ */}
            <div className='nav_right d-flex align-items-center gap-4'>
              <div className='nav_btns d-flex align-items-center gap-4'>
                <Button style={{backgroundColor: '#ED7014', borderColor:'#ED7014'}}>
                  <Link style={{color: 'white', textDecoration:'none'}} to={'/login'} >Login</Link>
                </Button>
                <Button style={{borderColor: '#ED7014', backgroundColor: 'white'}}>
                  <Link style={{color: '#ED7014', textDecoration:'none'}} to={'/register'}>Register</Link>
                </Button>
              </div>

              <span className='mobile_menu'>
                 <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>

    </header>
  )
}

export default Header
