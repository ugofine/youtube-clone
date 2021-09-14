import Header from './Header.js';
import Sidebar from './Sidebar.js';

import Recommendedvideo from './Recommendedvideo.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-page">
      <Sidebar/>
      <Recommendedvideo/>
      
      </div>
    </div>
  );
}

export default App;
