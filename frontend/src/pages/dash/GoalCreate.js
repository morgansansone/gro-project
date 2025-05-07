import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/UserContext";
import NavLogin from "../account/NavLogin.js";
import SideBar from "./SideBar.js";

const PriorityButton = ({ label, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[45px] h-[45px] rounded-full flex items-center justify-center text-[30px] leading-none
      text-red-600 transition-colors duration-200
      ${selected ? "bg-[#b9b8a7]" : "bg-[#E9E7D4] hover:bg-[#b9b8a7]"}`}
      title={label}
    >
      {label}
    </button>
  );
};

export default function GoalCreate() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    goalName: '',
    targetAmount: '',
    plantType: null,
    priority: null
  });
  const [error, setError] = useState('');
  const [showMaxGoals, setShowMaxGoals] = useState(false);

  const plantOptions = ["Sunflower", "Cactus", "Rose"];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Frontend validation
    if (!formData.goalName || !formData.targetAmount || !formData.plantType) {
      setError('Please fill all required fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/create-goal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          goalName: formData.goalName,
          targetAmount: formData.targetAmount,
          plantType: formData.plantType
        })
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.message === 'Maximum of 3 goals allowed') {
          setShowMaxGoals(true);
        } else {
          setError(data.message || 'Failed to create goal');
        }
        return;
      }

      // Update context with new goal
      const newGoal = {
        goalName: formData.goalName,
        plantType: formData.plantType,
        currentAmount: 0,
        targetAmount: Number(formData.targetAmount)  // Convert to number
      };

      setUser(prev => ({
        ...prev,
        plants: [...prev.plants, newGoal]
      }));


      navigate('/dashboard');

    } catch (err) {
      setError('Network error - please try again');
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFCF7] flex flex-col">
      {/* Max Goals Modal */}
      {showMaxGoals && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm">
            <h3 className="text-xl font-bold mb-4">Maximum Goals Reached</h3>
            <p>You can only have up to 3 active goals at a time.</p>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
              onClick={() => setShowMaxGoals(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {error && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm">
            <h3 className="text-xl font-bold mb-4">Error</h3>
            <p>{error}</p>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
              onClick={() => setError('')}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Existing UI (no visual changes) */}
      <NavLogin />
      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto bg-[#f5f7e9] p-8 rounded-2xl shadow-md border border-gray-200">
            <h1 className="text-3xl font-bold text-green-700 mb-8">Create a New Goal</h1>

            {/* Goal Name + Priority */}
            <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full">
                <label className="text-xl font-medium">Goal Name:</label>
                <input
                  type="text"
                  className="flex-1 border border-gray-300 bg-gray-50 rounded-md p-2 w-full lg:w-auto"
                  placeholder="Enter your goal"
                  value={formData.goalName}
                  onChange={(e) => handleInputChange('goalName', e.target.value)}
                />
              </div>
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                <label className="text-xl font-medium">Priority:</label>
                <div className="flex gap-2">
                  {["!", "!!", "!!!"].map((label) => (
                    <PriorityButton
                      key={label}
                      label={label}
                      selected={formData.priority === label}
                      onClick={() => handleInputChange('priority', label)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Goal Amount + Plant */}
            <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
              <div className="flex flex-col gap-2">
                <label className="text-xl font-medium">Goal Amount:</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded-md p-2 w-40"
                  placeholder="$0.00"
                  value={formData.targetAmount}
                  onChange={(e) => handleInputChange('targetAmount', e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xl font-medium">Choose a Plant:</label>
                <div className="flex gap-4">
                  {plantOptions.map((plant) => (
                    <button
                      key={plant}
                      onClick={() => handleInputChange('plantType', plant)}
                      className={`px-4 py-2 rounded-lg border transition ${
                        formData.plantType === plant
                          ? "bg-green-300 border-green-600"
                          : "bg-[#f9f9f3] border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {plant}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button 
                onClick={handleSubmit}
                className="bg-[#5DB151] text-white px-6 py-2 rounded-lg hover:bg-[#4a8c41] transition"
              >
                Create Goal
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
