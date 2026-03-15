# Money Mantri - Smart Earnings & Credit

Money Mantri is a modern, AI-powered fintech web application designed to empower informal sector youth, gig workers, and students in India. It helps users track spending, discover micro-work opportunities, and build a responsible credit history through data-driven insights and alternative credit scoring.

## 🚀 Features

### 1. AI-Powered Financial Assistant
*   **Spend Tracking**: Connects with bank accounts or UPI (mocked in this demo) to track your daily, weekly, and monthly expenses.
*   **AI Budgeting**: Automatically categorizes spending and provides smart budgets based on income flow.

### 2. Micro-Gig Marketplace
*   **Discover Gigs**: A dedicated dashboard view where users can find short-term, local, or remote tasks (micro-gigs) to supplement their income.
*   **AI Matching**: Recommends gigs based on user skills, past experience, and current location.

### 3. Alternative Credit Scoring
*   **Credit Eligibility**: Generates a dynamic credit score based on app usage, gig completion, and budget adherence.
*   **Micro-Credit**: Unlocks micro-loan tiers (e.g., ₹5,000, ₹10,000) for users who demonstrate responsible financial behavior.

### 4. Interactive Dashboard
*   **Overview**: A high-level summary of total balance, credit elasticity, and recommended gigs.
*   **Analytics**: Detailed charts breaking down the flow of income versus expenditure.

## 🛠️ Technology Stack

*   **Frontend Framework**: React 18 with Vite
*   **Routing**: React Router DOM (v6) for seamless client-side navigation.
*   **Styling**: Custom, responsive Vanilla CSS with a glassmorphism design system. (No Tailwind)
*   **Icons**: Lucide React
*   **Authentication**: Firebase Authentication (Currently running in Mock/Dummy mode for easy testing).

## 💻 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dominator025/ironwomen.git
   cd ironwomen
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to `http://localhost:5173/` in your browser.

## 🧪 Testing the Application (Mock Login)

The application currently uses a mock authentication system so you can test the dashboard without setting up a Firebase backend.

1. Go to the login page (`/login`).
2. The email and password fields will be pre-filled with dummy data (`demo@moneymantri.com` / `demo1234`).
3. Simply click **Sign In** to access the protected Dashboard.

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, Footer, Landing Sections)
├── contexts/         # React Contexts (AuthContext for mock authentication)
├── pages/            # Main page components (Landing, Login, Signup, Dashboard)
│   └── dashboard/    # Sub-views for the Dashboard (Overview, Analytics, etc.)
├── App.jsx           # Main application routing and context providers
├── index.css         # Global design system, glassmorphism, and animations
└── main.jsx          # React entry point
```
