# Chatbot Setup Workflow

A React-based onboarding workflow for businesses to set up AI chatbots, featuring user registration, organization configuration, and chatbot integration.

## Features

- **Three-Step Onboarding Process**
  - User Registration with Email Verification
  - Organization Setup with Website Meta-Description Auto-Fetch
  - Chatbot Integration & Testing
- **Interactive UI Components**
  - Real-time scraping status tracking
  - Website preview with content chunks
  - Integration success confetti animation
  - Copy-paste code integration
- **Security Features**
  - Email verification with time-limited codes
  - Password validation
  - Google OAuth option
- **Developer Friendly**
  - Responsive design with Tailwind CSS
  - Mock backend simulations
  - Clear navigation flow

## Technologies Used

- **Frontend**
  - React.js
  - React Router v6
  - Tailwind CSS
  - react-confetti
  - @react-hook/window-size
- **Backend (Simulated)**
  - Email verification service
  - Website scraping engine
  - Chatbot training pipeline

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chatbot-setup.git
   cd chatbot-setup
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install required packages:
   ```bash
   npm install react-confetti @react-hook/window-size
   ```
4. Start the development server:
   ```bash
    npm start
   ```

## Project Structure
    ```bash
        src/
          ├── components/    # Reusable UI components
          ├── pages/         # Main workflow screens
          │   ├── Registration.jsx
          ├── Verification.jsx
          │   ├── OrganizationSetup.jsx
          │   ├── ScrapingStatus.jsx
          │   └── IntegrationDashboard.jsx
          ├── App.js         # Router configuration
          └── index.js       # Entry point
    ```
