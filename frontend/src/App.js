import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Navigation  Bar*/}
      <nav className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        {/* Left Side*/}
        <div className="flex items-center space-x-4">
          <img src="components/logo_tnsprtbkg.png" alt="Gro Logo" className="h-28" /> {/* Logo here */}
          <a href="#" className="text-gray-700 hover:text-green-700">Features</a>
          <a href="#" className="text-gray-700 hover:text-green-700">Plants</a>
          <a href="#" className="text-gray-700 hover:text-green-700">About</a>
        </div>

        {/* Right Side*/}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-green-700">Log In</a>
          <a href="#" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12 mt-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center md:justify-start">
            Tend to your savings with{" "}
            <img 
              src="components/logo_tnsprtbkg.png" // Use the Gro logo
              alt="Gro Logo" 
              className="h-20 ml-2" // Adjust size and spacing
            />
          </h2>
            <p className="text-lg text-gray-600 mb-6">Mindful savings goals made easy</p>
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-800">
              Sign Up Today
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="components/plant_main.png" // Replace with your image path
              alt="Savings Illustration" 
            />
          </div>
        </div>
      </div>

      {/* Savings Overview */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Total Savings: <span className="text-green-700">$3,000</span></h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">New Car</span>
            <span className="text-green-700">$1,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Emergency Fund</span>
            <span className="text-green-700">$1,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Vacation</span>
            <span className="text-green-700">$1,000</span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Create custom or preset goals directly from your bank accounts
        </p>
      </div>
    </div>
  );
}

export default App;