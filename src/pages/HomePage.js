import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.js'; 
import Footer from '../components/Footer.js';
import Card from '../components/card-component.jsx'

function HomePage() {
  return (
    <div>
      <NavBar /> {/* Include the NavBar */}
      {/* <h1>Home Page</h1> */}
      {/* <Link to="/about">Go to About Page</Link> */}
      {/* <Footer/> */}
      <Card />
    </div>
  );
}

export default HomePage;
