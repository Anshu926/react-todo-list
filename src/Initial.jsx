// src/Initial.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Initial.css';

const Initial = () => {
  return (
    <>
    <br />
    <div className="initial-container">
      <h1> Welcome to the Todo App !!</h1>
      <p>This is the starting point of your React App !!.</p>

      <Link to="/home">
        <button className="navigate-button">Go to Home</button>
      </Link>
    </div>
    </>
  );
};

export default Initial;
