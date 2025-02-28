import React, { useEffect, useState } from 'react';
import './FallingCoconuts.css';

// Import the coconut images
import coconut1 from './assets/1.png';
import coconut2 from './assets/2.png';
import coconut3 from './assets/3.png';
import coconut4 from './assets/4.png';

const coconutImages = [coconut1, coconut2, coconut3, coconut4];

const FallingCoconuts = () => {
  const [coconuts, setCoconuts] = useState([]);

  useEffect(() => {
    const createCoconut = () => {
      return {
        id: Math.random(), // Unique ID for each coconut
        image: coconutImages[Math.floor(Math.random() * coconutImages.length)], // Random coconut image
        left: Math.random() * 90 + 5, // Random horizontal position (5% to 95%)
        speed: Math.random() * 3 + 1, // Random speed between 1 and 4 seconds
        rotation: Math.random() * 20 - 10, // Slight random rotation (-10deg to 10deg)
      };
    };

    // Create 8 coconuts once on mount
    const initialCoconuts = Array(8).fill(null).map(() => createCoconut());
    setCoconuts(initialCoconuts);

    // No interval needed since we only want them to fall once
  }, []); // Empty dependency array means this only runs once on mount

  return (
    <div className="coconut-container">
      {coconuts.map((coconut) => (
        <img
          key={coconut.id}
          src={coconut.image}
          alt="Falling Coconut"
          className="coconut"
          style={{
            left: `${coconut.left}%`,
            animationDuration: `${coconut.speed}s`, // Use the random speed
            transform: `rotate(${coconut.rotation}deg)`,
          }}
          onAnimationEnd={(e) => {
            // Remove coconut when it finishes falling
            setCoconuts((prev) => prev.filter((c) => c.id !== coconut.id));
          }}
        />
      ))}
    </div>
  );
};

export default FallingCoconuts;