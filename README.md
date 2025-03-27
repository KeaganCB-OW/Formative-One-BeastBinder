# BeastBinder

BeastBinder is a React-based Single Page Application (SPA) designed to help Dungeon Masters and players compare and analyze monsters from Dungeons & Dragons 5th Edition. The app utilizes the **D&D 5e API** to provide detailed monster stats, comparisons, and visualizations.

## 🚀 Features

- **Dynamic Monster Search**: Search for monsters and view their stats dynamically.
- **Comparison Page**: Compare two monsters side-by-side, including stats, vulnerabilities, resistances, and immunities.
- **Enhanced Comparison Page**: Visualize monster stats using radar and bar charts, and compare HP with a pie chart.
- **Recent Monsters**: Automatically saves recently viewed monsters for quick access.
- **Responsive Design**: Fully responsive UI for seamless use across devices.
- **React Router Integration**: Smooth navigation between pages.

## 🛠️ Setup Instructions

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/BeastBinder.git
cd Formative-One-BeastBinder/beastbinder-app
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Start the Development Server**
```bash
npm start
```

- The app will be accessible at `http://localhost:3000/`.

### **4. Build for Production**
To create an optimized build for deployment, run:
```bash
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
│   ├── utils/             # Utility functions
│   ├── styles/            # Global and component styles
├── package.json           # Project dependencies
├── README.md              # Project documentation
├── .gitignore             # Git ignored files
└── ...
```

## 📜 Approach & Development Strategy

### **1. Component-Based Architecture**
- All UI elements are designed as reusable React components.
- Components are organized in logical folders for scalability and maintainability.

### **2. API Integration**
- The app fetches monster data dynamically from the **D&D 5e API**.
- Monster details are formatted and displayed in a user-friendly manner.

### **3. Data Visualization**
- **Chart.js** is used for visualizing monster stats with radar, bar, and pie charts.
- Charts are styled for consistency with the app's theme.

### **4. Routing & Navigation**
- Implemented **React Router** for seamless navigation between pages.
- Breadcrumbs provide contextual navigation between the **Comparison Page** and **Timeline Page**.

### **5. Local Storage**
- Recently viewed monsters are stored in local storage for quick access.

## 🛠️ Dependencies

- **React**: Frontend framework
- **React Router**: Navigation
- **Chart.js**: Data visualization
- **Axios**: HTTP requests
- **CSS Modules**: Scoped styles

## 📜 Future Enhancements

- Add advanced search filters (e.g., by size, type, or CR range).
- Improve performance by caching API responses.
- Add user authentication for saving custom monster lists.
- Enhance the Timeline Page with more detailed encounter tracking.

## 📝 License

This project is licensed under the **MIT License**.

---
Happy adventuring with **BeastBinder**! 🎲
