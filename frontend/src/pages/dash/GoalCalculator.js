import React, { useState } from "react";

export default function GoalCalculator() {
  const [goal, setGoal] = useState("");
  const [saved, setSaved] = useState("");
  const [monthly, setMonthly] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const goalNum = parseFloat(goal);
    const savedNum = parseFloat(saved);
    const monthlyNum = parseFloat(monthly);

    if (!goalNum || !monthlyNum || monthlyNum <= 0) {
      setResult("Please enter valid numbers.");
      return;
    }

    const remaining = goalNum - savedNum;
    if (remaining <= 0) {
      setResult("🎉 You've already reached your goal!");
    } else {
      const months = Math.ceil(remaining / monthlyNum);
      setResult(`⏳ You'll reach your goal in approximately ${months} month(s).`);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="number"
        placeholder="Goal Amount ($)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <input
        type="number"
        placeholder="Current Savings ($)"
        value={saved}
        onChange={(e) => setSaved(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <input
        type="number"
        placeholder="Monthly Contribution ($)"
        value={monthly}
        onChange={(e) => setMonthly(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <button
        onClick={calculate}
        className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
      >
        Calculate
      </button>
      {result && <p className="mt-4 text-green-800 font-medium">{result}</p>}
    </div>
  );
}
