import React, { useState } from 'react';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send this to your backend
      console.log('Email submitted:', email);
      setSubmitted(true);
      setEmail('');
      
      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="w-full p-6 rounded-lg backdrop-blur-sm border border-white/10">
      <h3 className="text-xl mb-4 text-center">Stay Connected...</h3>
      
      {submitted ? (
        <div className="p-3 bg-white/10 rounded text-center animate-fadeIn">
          Thank you! We'll keep you updated.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-grow p-3 rounded bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
          <button
            type="submit"
            className="p-3 bg-white text-black rounded font-bold hover:bg-gray-200 transition-colors"
          >
            NOTIFY ME
          </button>
        </form>
      )}
      
      <p className="mt-4 text-xs opacity-60 text-center">
        We respect your privacy and will only send updates about this event.
      </p>
    </div>
  );
};

export default SignupForm;