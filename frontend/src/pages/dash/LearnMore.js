import React, { useState } from "react";
import SideBar from "./SideBar.js";
import NavLogin from "../account/NavLogin.js";
import GoalCalculator from "./GoalCalculator";
import BudgetQuiz from "./BudgetQuiz";


function FAQItem({ question, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-3 bg-[#eef3e1] hover:bg-[#e6edd6] text-green-800 font-semibold flex justify-between items-center"
      >
        {question}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-white text-gray-700 text-base">
          {children}
        </div>
      )}
    </div>
  );
}

function ResourceItem({ title, icon, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-3 bg-[#eef3e1] hover:bg-[#e6edd6] text-green-800 font-semibold flex justify-between items-center"
      >
        <span className="flex items-center gap-2">
          <span className="text-xl">{icon}</span> {title}
        </span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-white text-gray-700 text-base">
          {children}
        </div>
      )}
    </div>
  );
}

// Modal component for displaying the Goal Calculator
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-xl relative">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-green-700 text-xl hover:text-green-900"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default function LearnMore() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  return (
    <div className="min-h-screen bg-[#FBFCF7] flex flex-col">
      <NavLogin />

      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto bg-[#f5f7e9] p-8 rounded-2xl shadow-md border border-gray-200">
            {/* Intro */}
            <div className="flex items-center mb-6">
              <h1 className="text-4xl font-bold text-green-700">Welcome to</h1>
              <img 
                src="/components/logo_tnsprtbkg.png" 
                alt="Gro Logo" 
                className="h-20 ml-4" 
              />
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              You've just stepped into a smarter way to save. Set goals, watch your progress grow.
              Let’s walk through how Gro works so you can make the most of it.
            </p>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-green-700 mb-6">Frequently Asked Questions</h2>

            <FAQItem question="What is Gro?">
              Gro is your all-in-one savings and financial planning app. With visual goal tracking, manual fund
              allocation, and plant-based progress, you’ll stay motivated and in control of your savings journey.
            </FAQItem>

            <FAQItem question="What features does Gro include?">
              <ul className="list-disc pl-4 space-y-2">
                <li><strong>Dashboard:</strong> Create and track savings goals with priority levels and plant types.</li>
                <li><strong>Allocate Funds:</strong> Manually distribute your savings to goals you care about most.</li>
                <li><strong>Plants Section:</strong> Watch your goals grow as you save. Complete them and move to “Harvest.”</li>
                <li><strong>Bank Settings:</strong> Securely connect your bank account to manage and automate funds.</li>
                <li><strong>Learn More:</strong> Dive into helpful guides like this one.</li>
                <li><strong>User Settings:</strong> Manage your info, reset passwords, or update credentials.</li>
                <li><strong>Add New Goals:</strong> Name it, set an amount, priority, and a plant—and start saving!</li>
              </ul>
            </FAQItem>

            <FAQItem question="How does Gro work?">
              <ol className="list-decimal pl-4 space-y-2">
                <li><strong>Set a Goal:</strong> For example, “New Laptop” for $1,500 with a cactus and high priority.</li>
                <li><strong>Allocate Funds:</strong> Manually add funds to your goals whenever you're ready.</li>
                <li><strong>Watch It Grow:</strong> Your plant visually progresses through stages as you save.</li>
                <li><strong>Goal Complete:</strong> Fully grown plants move to your “Completed Goals” section.</li>
              </ol>
            </FAQItem>

            <h2 className="text-2xl font-bold text-green-700 mt-10 mb-4">Educational Resources</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Explore tutorials, app walkthroughs, and personal finance tips to maximize your Gro experience.
            </p>

            <div className="space-y-4">
              <ResourceItem title="Budgeting Basics">
                <p className="mb-3">
                  <strong>Understanding the 50/30/20 Rule:</strong> Allocate your income effectively:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>50%</strong> for necessities</li>
                  <li><strong>30%</strong> for wants</li>
                  <li><strong>20%</strong> for savings</li>
                </ul>
                <p className="mt-3">This method helps in managing expenses and building savings.</p>
                <a
                  href="https://www.commercebank.com/personal/ideas-and-tips/2019/budget-basics-you-may-not-learn-in-school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 underline block mt-3"
                >
                  Read: Budget Basics You May Not Learn in School → (Commerce Bank)
                </a>
                <button
                  onClick={() => setShowQuiz(true)}
                  className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Take the Budgeting Quiz →
                </button>

                <Modal isOpen={showQuiz} onClose={() => setShowQuiz(false)}>
                  <h2 className="text-xl font-bold text-green-700 mb-4">Budgeting Quiz</h2>
                  <BudgetQuiz />
                </Modal>

              </ResourceItem>

              <ResourceItem title="Financial Education">
                <p className="mb-3">
                  <strong>Building an Emergency Fund:</strong> Aim to save 3–6 months' worth of expenses to prepare for unexpected situations.
                </p>
                <a
                  href="https://www.commercebank.com/personal/ideas-and-tips/2021/power-up-your-savings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 underline block mt-2"
                >
                  Read: How to grow your savings account → (Commerce Bank)
                </a>
                <button
                  onClick={() => setShowCalculator(true)}
                  className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Use the Emergency Fund Calculator →
                </button>

                <Modal isOpen={showCalculator} onClose={() => setShowCalculator(false)}>
                  <h2 className="text-xl font-bold text-green-700 mb-4">Emergency Fund Calculator</h2>
                  <GoalCalculator />
                </Modal>
              </ResourceItem>

              <ResourceItem title="Goal-Based Saving" icon="🎯">
                <p className="mb-3">
                  <strong>Setting and Achieving Financial Goals:</strong> Define clear, attainable goals to stay motivated and track progress.
                </p>

                <a
                  href="https://www.commercebank.com/business/trends-and-insights/2021/creating-a-clear-vision-to-meet-your-financial-goals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 underline block"
                >
                  Read: Creating a Clear Vision to Meet Your Financial Goals → (Commerce Bank)
                </a>

                <a
                  href="https://www.commercebank.com/business/trends-and-insights/2019/tips-for-setting-strategic-goals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 underline block mt-2"
                >
                  Read: Tips for Setting Strategic Goals → (Commerce Bank)
                </a>

                <a
                  href="https://www.commercebank.com/personal/invest/helping-you-plan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 underline block mt-2"
                >
                  Read: Helping You Plan → (Commerce Bank)
                </a>

                <a
                  href="/goal_planning_worksheet.pdf"
                  download
                  className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Download Goal Planning Worksheet →
                </a>
              </ResourceItem>
            </div>




            {/* Closing Encouragement */}
            <div className="mt-10 p-4 bg-green-100 rounded-xl text-green-800 text-center">
              <strong>You’ve got this!</strong> Whether it’s your first goal or your tenth, Gro is here to help every dollar count.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
