# Gro Project

A web-based application for managing personal budgets, tracking expenses, and visualizing financial data.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Technical Details](#technical-details)
- [Contributing](#contributing)
- [License](#license)

## About
The Gro App is a savings and financial planning tool that combines goal-setting, gamification, and AI-driven fund allocation. Users can set savings goals, track their progress, and watch their goals "grow" like plants. Once a goal is achieved, it moves to a "completed goals" section. The app also includes bank settings, user settings, and educational resources to help users manage their finances effectively.

## Features

### 1. **Dashboard**
- Set savings goals with:
  - **Goal Name**: Custom name (e.g., "Vacation Fund").
  - **Goal Amount**: Total amount needed.
  - **Priority Level**: High, medium, or low.
  - **Plant Type**: Choose a plant to represent your goal.
- Track progress visually as your plant grows.

### 2. **Allocate Funds**
- **AI-Driven Allocation**:
  - Automatically distributes funds based on goal priority and amount.
- **Manual Allocation**:
  - Allocate funds to specific goals manually.
- Choose to allocate funds to **All Goals** or **One Specific Goal**.

### 3. **Plants Section**
- **Active Goals**:
  - Plants grow as you save money.
- **Completed Goals**:
  - Fully funded goals move to the "Completed Goals" section.

### 4. **Bank Settings**
- Securely input and view:
  - Routing number.
  - Bank account number.

### 5. **Learn More**
- Tutorials and guides on using the app.
- Explains how the **Allocate Funds** feature works.

### 6. **User Settings**
- Update:
  - First name, last name, routing number, and bank account number.
- Change email or password via email verification.

### 7. **Main Page**
- Navigation buttons:
  - **Features**: Overview of app features.
  - **Plants**: View active and completed goals.
  - **About**: Learn more about the app.
- **Login/Get Started**:
  - Log in with email and password.
  - Create a new account with:
    - First name, last name, email, and password.

### 8. **Add New Goal**
- Input:
  - Goal name, goal amount, plant type, and priority level.
- Create the goal and start saving.

### 9. **Current Goal Settings**
- View and edit:
  - Goal name, goal amount, amount saved, and priority level.
- Add funds directly to the goal.

## How It Works
1. **Set a Goal**:
   - Example: "New Laptop" ($1,500, Cactus, High Priority).
2. **Allocate Funds**:
   - Add $500 to savings. AI allocates $300 to "New Laptop" and $200 to other goals.
3. **Track Progress**:
   - Watch the cactus grow as you save.
4. **Complete Goal**:
   - Once $1,500 is saved, the cactus is fully grown, and the goal moves to **Completed Goals**.

   

## Requirements
### Functional Requirements
- The application must not use any CMS (e.g., WordPress, Joomla).
- It must be a web-based application accessible via modern browsers.
- The database must be SQL Server 2012 or later.
- A CSS framework (e.g., Bootstrap, Tailwind CSS) must be used for front-end design consistency.
- Unit testing is mandatory for critical components (e.g., user authentication, budgeting calculations).

### Nonfunctional Requirements
- **Financial Accuracy**: Ensure accurate calculations for budgets, expenses, and savings goals.
- **User Experience**: Intuitive navigation, responsive design, and modern UI/UX principles.
- **Accessibility**: Comply with WCAG 2.1 standards and provide keyboard navigation support.
- **Performance**: Optimize for fast load times (<2 seconds per page).
- **Scalability**: Ensure the application can handle increased traffic or data load.

## Installation
To set up the project locally:
```bash
git clone https://github.com/morgansansone/gro-project.git
cd gro-project
npm install

## Usage
### Available Scripts
In the project directory, you can run:
- \`npm start\`: Runs the app in development mode.
- \`npm test\`: Launches the test runner in interactive watch mode.
- \`npm run build\`: Builds the app for production.
- \`npm run eject\`: Ejects the app for full configuration control (one-way operation).

### Accessing the App
1. Run the app:
   \`\`\`bash
   npm start
   \`\`\`
2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technical Details
### Frontend
- Built with **React** and a CSS framework (Bootstrap or Tailwind CSS).
- Responsive design for mobile, tablet, and desktop devices.

### Backend
- **Database**: Google Cloud Server.
- **API**: TBD
- **AI Integration**: AI-powered budget recommendations and expense categorization.

### Testing
- Unit tests and integration tests for critical components.
- Usability testing with at least 5 users.

### Deployment
- Deployed to a Windows server or cloud instance (e.g., Azure, AWS).
- Security scan using tools like OWASP ZAP.
- Accessibility audit using tools like WAVE or Axe.



## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
EOF
