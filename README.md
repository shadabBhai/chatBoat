# Chatbot Setup Workflow

A React-based onboarding workflow for businesses to set up AI chatbots, featuring user registration, organization configuration, and chatbot integration.

## Live URL 
  ```bash
    https://chat-boat-orpin.vercel.app/
  ```
### Demo data
  ```bash
     email : demo@mail.com
     password : 123456
     verify Email : 123456
  ```
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

## Contributing
1. Fork the repository.
2. Create your feature branch:
```bash
git checkout -b feature/your-feature
```
3. Commit your changes:
```bash
git commit -m 'Add some feature'
```
4. Push to the branch:
```bash
git push origin feature/your-feature
```
5. Open a Pull Request

## Future Improvements
* Add real backend integration

* Implement comprehensive form validation

* Add user authentication persistence

* Include actual chatbot training status

* Add admin panel functionality

* Implement social media sharing features





