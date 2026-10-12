import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Home = () => <div align='center' style={{ marginTop: '20px', fontSize: '24px' }}>Home Component</div>;
const About = () => <div align='center' style={{ marginTop: '20px', fontSize: '24px' }}>About Component</div>;
const Contact = () => <div align='center' style={{ marginTop: '20px', fontSize: '24px' }}>Contact Component</div>;
const Profile = () => <div align='center' style={{ marginTop: '20px', fontSize: '24px' }}>Profile Component</div>;

const CustomNavbar = () => {
  return (
    <Navbar color="dark" dark expand="md" style={{ padding: '10px 20px' }}>
      <NavbarBrand tag={Link} to="/">Logo</NavbarBrand>
      <Nav className="ms-auto" navbar style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
        <NavItem>
          <NavLink tag={Link} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default function Ex22App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>     
    </Router>
  );
}