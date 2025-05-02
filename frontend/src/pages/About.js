import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";

function About() {
  const teamMembers = [
    {
      name: "Grady Bice",
      role: "Backend Engineer & Database Architect",
      image: "/team/grady.jpg",
      bio: "Designed the backend architecture and structured the database. Connected the database to the frontend for login and goal display, ensuring a seamless flow of data throughout the app."
    },
    {
      name: "Isa Ortiz-Acosta",
      role: "Frontend Developer & UX Designer",
      image: "/team/isa.jpg",
      bio: "Focused on building the dashboard UI, goal creation flow, and interactive modals. Designed Figma mockups for key user features and created the final presentation slides."
    },
    {
      name: "Jake Walker",
      role: "Backend Engineer & Cloud Infrastructure Lead",
      image: "/team/jake.jpg",
      bio: "Deployed the database on a Google Cloud server and integrated it with the frontend for account creation. Ensured backend stability and accessibility across the application."
    },
    {
      name: "Morgan Sansone",
      role: "Project Manager, Frontend Developer & Visual Designer",
      image: "/team/morgan.JPG",
      bio: "Set up the project repository, created the logo and visual design system, and built the home, login, create account, and informational pages. Designed layouts in Canva and co-led planning using Confluence with Isa."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8faf3]">
      <NavBar />

      <div className="container mx-auto p-8">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-green-700 mb-6">About Gro</h1>

          <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            The Gro Application is a savings and financial planning tool that combines goal-setting, gamification, and fund allocation. Users can set savings goals, track their progress, and watch their goals "grow" like plants. Once a goal is achieved, it moves to a "completed goals" section. The app also includes bank settings, user settings, and educational resources to help users manage their finances effectively.
          </p>

          <h2 className="text-2xl font-semibold text-green-600">How It Works</h2>
          <p>
            Create a goal like “New Bike” or “Vacation to Bali,” set a target amount, and start contributing. As you save, your goal visibly progresses, helping you stay motivated. Once you reach your target, you can mark it as completed and track what your savings helped you accomplish.
          </p>

          <h2 className="text-2xl font-semibold text-green-600">Our Story</h2>
          <p>
            Gro started as a computer science capstone project with the goal of rethinking personal finance. We found that most budgeting tools were too boring or not interactive so we set out to build something more gamified, visual, and enjoyable to use.
          </p>

          <h2 className="text-2xl font-semibold text-green-600">Meet the Team</h2>
          <p>
            We're a team of computer science students who collaborated on design, development, and deployment to bring Gro to life. We built this platform to make managing money simpler and more motivating for everyone.
          </p>


            {/* Team Member Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="bg-[#f0f7eb] rounded-xl shadow-md p-4 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                  />
                  <h3 className="text-green-800 font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-[#3a7d44] mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-lg"
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
