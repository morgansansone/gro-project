import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';

const Modal = ({ isOpen, onClose }) => {
  const { user, setUser } = useContext(UserContext);
  const [amount, setAmount] = useState('');
  const [allocationType, setAllocationType] = useState('allGoals');
  const [selectedGoal, setSelectedGoal] = useState('');
  const [error, setError] = useState('');

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setAmount('');
      setAllocationType('allGoals');
      setSelectedGoal('');
      setError('');
    }
  }, [isOpen]);

  const handleAllocate = async () => {
    try {
      setError('');
      const parsedAmount = parseFloat(amount);
      
      // Validation
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        throw new Error('Please enter a valid positive amount');
      }
      
      if (allocationType === 'oneGoal' && !selectedGoal) {
        throw new Error('Please select a goal to allocate to');
      }
  
      // Create updated goals array
      let updatedPlants = user.plants.map(plant => ({ ...plant }));
      let remainingAmount = parsedAmount;
  
      if (allocationType === 'allGoals') {
        const perGoal = parsedAmount / updatedPlants.length;
        
        // Check for potential overflows
        const canAllocate = updatedPlants.every(plant => 
          (plant.currentAmount + perGoal) <= plant.targetAmount
        );
  
        if (!canAllocate) {
          const maxPerGoal = Math.min(...updatedPlants.map(plant => 
            plant.targetAmount - plant.currentAmount
          ));
          throw new Error(
            `Cannot allocate $${perGoal.toFixed(2)} to all goals. ` +
            `Maximum per goal: $${maxPerGoal.toFixed(2)}`
          );
        }
  
        updatedPlants = updatedPlants.map(plant => ({
          ...plant,
          currentAmount: plant.currentAmount + perGoal
        }));
      } else {
        const goalIndex = updatedPlants.findIndex(p => p.goalName === selectedGoal);
        if (goalIndex === -1) throw new Error('Selected goal not found');
        
        const targetAmount = updatedPlants[goalIndex].targetAmount;
        const newCurrent = updatedPlants[goalIndex].currentAmount + parsedAmount;
        
        if (newCurrent > targetAmount) {
          const maxAllowed = targetAmount - updatedPlants[goalIndex].currentAmount;
          throw new Error(
            `Cannot allocate $${parsedAmount.toFixed(2)}. ` +
            `Maximum allowed for "${selectedGoal}": $${maxAllowed.toFixed(2)}`
          );
        }
  
        updatedPlants[goalIndex].currentAmount = newCurrent;
      }
  
      // Update backend
      const response = await fetch('http://localhost:5000/api/update-goals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          plants: updatedPlants
        })
      });
  
      if (!response.ok) throw new Error('Failed to update goals');
  
      // Update frontend state only after successful backend update
      setUser({ ...user, plants: updatedPlants });
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-[#f8faf3] rounded-xl shadow-md p-6 w-4/5 max-w-md">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Allocate Funds</h2>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
            Amount: $
          </label>
          <input
            type="number"
            id="amount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="allGoals"
              name="allocationType"
              checked={allocationType === 'allGoals'}
              onChange={() => setAllocationType('allGoals')}
              className="mr-2 focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 focus:ring-2"
            />
            <label htmlFor="allGoals" className="text-gray-700 text-sm">
              All Goals
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="oneGoal"
              name="allocationType"
              checked={allocationType === 'oneGoal'}
              onChange={() => setAllocationType('oneGoal')}
              className="mr-2 focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 focus:ring-2"
            />
            <label htmlFor="oneGoal" className="text-gray-700 text-sm mr-2">
              One Goal
            </label>
            <select 
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={selectedGoal}
              onChange={(e) => setSelectedGoal(e.target.value)}
              disabled={allocationType !== 'oneGoal'}
            >
              <option value="">Select Goal</option>
              {user?.plants?.map((goal) => (
                <option key={goal.goalName} value={goal.goalName}>
                  {goal.goalName} (${goal.currentAmount.toFixed(2)} / ${goal.targetAmount.toFixed(2)})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-[#5DB151] hover:bg-[#4a8c41] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            onClick={handleAllocate}
          >
            Allocate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
