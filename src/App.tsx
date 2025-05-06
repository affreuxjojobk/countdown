import React from 'react';
import Countdown from './components/Countdown';
import ParticleBackground from './components/ParticleBackground';
import SignupForm from './components/SignupForm';
import flyerImage from './assets/flyer_countdown.jpeg';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      <ParticleBackground />
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">
        {/* Flyer */}
        <div className="w-full max-w-sm mx-auto relative group mb-8">
          <img 
            src={flyerImage} 
            alt="Event Flyer" 
            className="w-full rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105"
          />
        </div>

        <Countdown targetDate="2025-09-06T00:00:00" />
        
        <div className="mt-12 w-full max-w-md">
          <SignupForm />
        </div>
        
        {/* Footer */}
        <footer className="mt-16 text-center opacity-70 text-sm">
          <p>© 2025. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;