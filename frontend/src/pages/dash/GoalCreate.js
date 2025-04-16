import NavLogin from "../account/NavLogin.js";
import React from 'react';
import { usestate } from 'react';

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
    const [selectedPlant, setSelectedPlant] = React.useState(null);

    const handlePlantSelect = (plant) => {
        setSelectedPlant(plant);
    };

    const [selectedPriority, setSelectedPriority] = React.useState(null);
 
     const handlePrioritySelect = (priority) => {
         setSelectedPriority(priority);
     };

    const plantOptions = ["Sunflower", "Cactus", "Rose"];

    return(
        <div className="h-screen bg-[#FBFCF7]">
            {/* Navbar at top */}
            <NavLogin />
            <div className="flex justify-center">
                <div className="w-8/12 px-12 mt-20 p-10 bg-[#f5f7e9] rounged-lg shadow-md border-s">
                    <div className="flex justify-evenly items-center flex-nowrap whitespace-nowrap mb-10 w-full">
                        <div className="flex items-center gap-2">
                            <div className="ml-12 mr-8 text-3xl">Goal Name: </div>
                            <input type="text" className="border border-gray-300 bg-gray-50 rounded-md p-2" />
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0 mr-10 ml-10">
                            <h2 className="mr-2">Priority: </h2>
                            {["!", "!!", "!!!"].map((label) => (
                            <PriorityButton
                            key={label}
                            label={label}
                            selected={selectedPriority === label}
                            onClick={() => handlePrioritySelect(label)}
                            />
                        ))}
                        </div>
                    </div>
                    <div className="flex items-center w-full justify-evenly">
                        <div className="flex items-center gap-4">
                            <div className="text-xl">Goal Amount:</div>
                            <input
                                type="number"
                                className="border border-gray-300 rounded-md p-2 w-40"
                                placeholder="$0.00"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl mb-2">Choose a Plant:</h3>
                            <div className="flex gap-4">
                                {plantOptions.map((plant) => (
                                <button
                                    key={plant}
                                    onClick={() => handlePlantSelect(plant)}
                                    className={`px-4 py-2 rounded-lg border ${
                                    selectedPlant === plant
                                        ? "bg-green-300 border-green-600"
                                        : "bg-white border-gray-300 hover:bg-gray-100"
                                    }`}
                                >
                                    {plant}
                                </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className="bg-[#5DB151] text-white px-3 py-2 rounded-lg w-auto float-right mt-10 hover:bg-[#4a8c41]">Create Goal</button>
                </div>
            </div>
        </div>
    )
}