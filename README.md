BeastBinder 🐉📖
Overview

BeastBinder is a React-based Dungeons & Dragons 5e Monster Comparison Tool that allows users to search, compare, and analyze monsters using data from the D&D 5e API. The app features a clean UI, dynamic component updates, and seamless navigation between pages.

The application currently includes:

    🏠 Landing Page – Introduction and navigation.
    📊 Comparison Page – Monster search, selection, and attribute comparison.
    ⏳ Timeline Page – Future implementation for encounter timeline tracking.
    🔍 Search System – Filters monsters based on user input.
    📈 Graph Integrations (Upcoming) – Placeholder sections for future Chart.js graphs.

Setup Instructions
1️⃣ Clone the Repository

git clone https://github.com/yourusername/BeastBinder.git
cd BeastBinder

2️⃣ Install Dependencies

Ensure you have Node.js and npm installed, then run:

npm install

3️⃣ Start the Development Server

npm start

This will launch the app at http://localhost:3000/.
4️⃣ Build for Production

To create an optimized build:

npm run build

This will generate static files in the /build directory.
Project Structure

beastbinder-app/
├── public/                   # Static assets
│   ├── assets/               # Icons, images
│   ├── index.html            # Base HTML template
│   ├── favicon.ico           # Custom app icon
├── src/                      # Main React source files
│   ├── components/           # Reusable UI components
│   ├── pages/                # Page components (Landing, Comparison, Timeline)
│   ├── styles/               # CSS files
│   ├── utils/                # Helper functions
│   ├── App.js                # Main app component
│   ├── index.js              # Root render file
├── package.json              # Dependencies & scripts
├── README.md                 # Project documentation

Approach & Best Practices
🛠️ Development Strategy

    Component-Based Design 🏗️
    Each feature is broken down into reusable components (e.g., MonsterSearch, MonsterDisplayName, MonsterCR).
    React Router for Navigation 🔄
    Smooth transitions between Landing, Comparison, and Timeline pages.
    Preemptive Coding for API Integration 🚀
        The app is structured to easily integrate the D&D 5e API later.
        Placeholder components (e.g., AttributeGraph, EncounterGraph) are pre-positioned.
    Performance Optimization ⚡
        Lazy-loading assets to improve page load times.
        Minimal re-renders using useState and useEffect efficiently.

Upcoming Features

✔️ Monster API Integration (Fetch data dynamically)
✔️ Chart.js Graphs (Visualize attributes & combat stats)
✔️ Encounter Timeline Management (Track and plan battles)
✔️ Improved Animations & Styling
