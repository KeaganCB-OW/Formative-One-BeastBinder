# BeastBinder

BeastBinder is a React Single Page Application (SPA) that utilizes the **D&D 5e API** to provide detailed monster comparisons and visualized data for game masters and players. The application includes a **Landing Dashboard**, a **Comparison Page**, and a **Timeline Page**, all following strict wireframe specifications.

## 🚀 Features
- **Dynamic Monster Search**: Search for monsters and filter results based on input.
- **Comparison Page**: Select a monster to display its stats dynamically.
- **Chart.js Integration**: Placeholder components for future data visualization.
- **React Router Navigation**: Smooth transitions between pages.
- **Fully Responsive UI**: Styled for consistent usability across all devices.

## 🛠️ Setup Instructions
### **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/beastbinder.git
cd beastbinder-app
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Start the Development Server**
```sh
npm start
```

- The app will now be accessible at `http://localhost:3000/`
- Make sure to check the **console for errors** if any arise.

### **4. Build for Production**
To create an optimized build for deployment, run:
```sh
npm run build
```

This will generate a `build/` folder with minified assets ready for hosting.

## 📂 Project Structure
```
beastbinder-app/
├── public/                # Static assets (favicon, manifest, images)
├── src/                   # Source code
│   ├── components/        # Reusable React components
│   ├── pages/             # Page-specific components
│   ├── routes/            # Routing logic
│   ├── styles/            # Global and component styles
│   ├── utils/             # Utility functions
├── package.json           # Project dependencies
├── README.md              # Project documentation
├── .gitignore             # Git ignored files
└── ...
```

## 📜 Approach & Development Strategy
### **1. Component-Based Architecture**
- All UI elements are designed as separate, reusable React components.
- Components are structured in logical folders for **scalability** and **modularity**.

### **2. Strict Wireframe Adherence**
- Each page follows the provided wireframes **pixel-perfectly**.
- CSS styles are explicitly defined to maintain consistent **spacing, typography, and alignment**.

### **3. Routing & Navigation**
- Implemented **React Router** to allow seamless navigation between pages.
- Breadcrumbs provide contextual navigation between the **Comparison Page** and **Timeline Page**.

### **4. Placeholder Data for Future API Integration**
- Currently, monster data is stored in `MonsterSearch.js` as a **static array**.
- Data fetching logic will be implemented later using the **D&D 5e API**.

### **5. Future Enhancements**
- Integrating **Chart.js** for graphical representation of monster stats.
- Connecting to an **external API** to dynamically retrieve monster details.
- Enhancing **search functionality** with additional filters.

## 🛠️ Dependencies
- **React** (Frontend framework)
- **React Router** (Navigation)
- **Chart.js** (Data visualization - Placeholder for now)
- **CSS Modules** (Scoped styles)

## 📝 License
This project is licensed under the **MIT License**.
