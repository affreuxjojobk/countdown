import React from 'react';
import Countdown from './components/Countdown';
import ParticleBackground from './components/ParticleBackground';
import SignupForm from './components/SignupForm';
import flyerImage from './assets/flyer_countdown.jpeg';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-y-auto bg-black text-white">
      <ParticleBackground />
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-4 sm:py-8 flex flex-col items-center">
      {/* Flyer */}
	  <div className="w-full max-w-sm sm:max-w-md md:max-w-xl mx-auto relative group mb-4 sm:mb-8">
		  <img 
			src={flyerImage} 
			alt="Event Flyer" 
			className="w-full rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105"
		  />
	  </div>


        <Countdown targetDate="2025-09-06T00:00:00" />
        
        <div className="mt-8 sm:mt-12 w-full max-w-md px-4 sm:px-0">
          <SignupForm />
        </div>
        
        {/* Footer */}
        <footer className="mt-8 sm:mt-16 text-center opacity-70 text-sm px-4">
		  <p className="pb-1">
			© 2025{' '}
			<a
			  href="https://linktr.ee/beautiful_kreyol"
			  target="_blank"
			  rel="noopener noreferrer"
			  className="underline hover:text-pink-400"
			>
			  Beautiful Kréyol
			</a>{' '}
			x{' '}
			<a
			  href="https://www.instagram.com/dj_wplus"
			  target="_blank"
			  rel="noopener noreferrer"
			  className="underline hover:text-pink-400"
			>
			  DJ W+
			</a>
			. All rights reserved.
		  </p>
		</footer>

      </div>
    </div>
  );
}

export default App;
