// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg mb-8">
          Welcome
        </h1>
        <p className="text-xl text-white mb-8">
          We’re excited to have you here!
        </p>
        <Link to="/signin">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
