// Preloader.tsx
import React from 'react';
import './Preloader.css'; // Import the CSS file for any additional styling

const Preloader: React.FC = () => {
  return (
    <div className="preloader-container">
      <img src="/Preloader/preloader.png" alt="Loading..." className="loader-image" />
    </div>
  );
};

export default Preloader;
