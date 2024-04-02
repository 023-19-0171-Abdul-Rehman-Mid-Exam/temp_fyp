import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar, Dropdown } from 'react-bootstrap'
import { FaUser, FaRegUser, FaHeart, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
import smartBuyLogo from '../img/SB-removebg-preview.png'

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchTerm)
  }

  return (
    <>
      <Navbar expand='lg' className='navbar-bg'>
        <Container style={{ maxWidth: '1200px' }} className='p-0'>
          <Navbar.Brand as={Link} to='/' className='navbar-brand custom-brand'>
            <img
              src={smartBuyLogo}
              alt='SmartBuy Logo'
              className='logo-image'
            />
            SmartBuy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto'>
              <Nav.Item>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to='/contact' className='nav-link'>
                  Contact Us
                </Link>
              </Nav.Item>
            </Nav>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/login'>
                <FaUser />
                <span className='ms-1 d-none d-sm-inline'>Login</span>
              </Nav.Link>
              <Nav.Link as={Link} to='/register'>
                <FaRegUser />
                <span className='ms-1 d-none d-sm-inline'>Register</span>
              </Nav.Link>
              <Form className='d-flex' onSubmit={handleSearch}>
                <Form.Control
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                  variant='outline-light'
                  as={Link}
                  to={`/Allproducts`}
                  style={{ marginRight: '10px' }} // Added margin-right
                >
                  Search
                </Button>
              </Form>
              <Dropdown className='ml-2'>
                <Dropdown.Toggle variant='outline-light' id='dropdown-basic'>
                  <FaUser />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to='/profile'>
                    <FaUser className='navigation-icon' />
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to='/favorites'>
                    <FaHeart className='navigation-icon' />
                    My Favorite List
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to='/logout'>
                    <FaSignOutAlt className='navigation-icon' />
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='hero-section'>
        <Container className='fixed-container'>
          <div className='row'>
            <div className='col-md-6'>
              <h1>
                Raining Offers For
                <br /> Hot Summer!
              </h1>
              <h3>25% Off On All Products</h3>
              <div>
                <Button
                  variant='light'
                  className='mx-2'
                  style={{ marginTop: '20px' }}
                >
                  Shop Now
                </Button>
                <Button
                  variant='secondary'
                  className='mx-2'
                  style={{
                    border: '1px solid white',
                    background: 'transparent',
                    marginTop: '20px',
                  }}
                >
                  Find More
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default HomePage
