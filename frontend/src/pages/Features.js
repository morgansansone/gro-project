import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";

function Features() {
  return (
    <div className="min-h-screen bg-[#f8faf3]">
      <NavBar />
      
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Our Plants</h1>
        <p className="text-lg text-gray-700 mb-4">
          Discover plants for your budget garden!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((plant) => (
            <div key={plant} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 bg-green-100 rounded-md mb-3"></div>
              <h3 className="font-semibold text-lg">Plant {plant}</h3>
              <p className="text-gray-600">Beautiful indoor plant</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;