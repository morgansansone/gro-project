import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";

function About() {
  return (
    <div className="min-h-screen bg-[#f8faf3]">
      <NavBar />
      
      <div className="container mx-auto p-8">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-700 mb-6">About Us</h1>
          
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>
              About us
            </p>

            <h2 className="text-2xl font-semibold text-green-600">How it Works</h2>
            <p>
              how it works
            </p>
            
            <h2 className="text-2xl font-semibold text-green-600">Our Story</h2>
            <p>
              story?
            </p>
            
            <h2 className="text-2xl font-semibold text-green-600">The Team</h2>
            <p>
              meet the team?
            </p>

            
            <div className="mt-8">
              <Link 
                to="/" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;