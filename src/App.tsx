import React from 'react';
import Countdown from './components/Countdown';
import ParticleBackground from './components/ParticleBackground';
import SignupForm from './components/SignupForm';
import flyerImage from './assets/flyer_countdown.jpeg';

function App() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-between overflow-hidden bg-black text-white px-4 py-6">
      <ParticleBackground />
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-4 flex flex-col items-center">
        
        {/* Flyer */}
        <div className="w-full max-w-sm mx-auto relative group mb-6">
          <img 
            src={flyerImage} 
            alt="Event Flyer" 
            className="w-full rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full">
			<Countdown targetDate="2025-09-06T00:00:00" />
		</div>

        
        <div className="mt-8 w-full max-w-md">
          <SignupForm />
        </div>
        
        {/* Footer */}
        <footer className="mt-8 text-center opacity-70 text-sm">
  <p className="pb-1">
    © 2025{' '}
    <a
      href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fbeautiful_kreyol%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaeYhgzPclK_fAQSzd30_eYzeIgDnPe4gC1OTNvTbvb2RQD5Y6p8mw99QWtMnA_aem_b0WBsiZLnhlfAR_4rrJlug&e=AT2K3MgbqP2-uShMlCCW6fwD7QgM7HycTirqkLWEo0lXJJx9eLsPs71TtapVdAk26BGjd59ZQ7lG9Jp53qXIdjOJemAJiKrYPVlf1w"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-pink-400"
    >
      Beautiful Kréyol
    </a>{' '}
    X{' '}
    <a
      href="https://www.instagram.com/dj_wplus?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  // remplace par le bon lien si besoin
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-pink-400"
    >
      Dj W+
			</a>© 2025 Beautiful Kréyol x Dj W+. All rights reserved.
		  </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
