import React, { useState } from 'react';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('https://countdown-beta-one.vercel.app/api/add-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError('Oops! Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to connect. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-4 sm:p-6 rounded-lg backdrop-blur-sm border border-white/10">
      <h3 className="text-lg sm:text-xl mb-4 text-center">Stay Connected...</h3>

      {submitted ? (
        <div className="p-3 bg-green-500/20 border border-green-500 text-green-300 rounded text-center animate-fadeIn">
          ✅ Thank you! We'll keep you updated.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-grow p-2 sm:p-3 rounded bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="p-2 sm:p-3 bg-white text-black rounded font-bold hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'NOTIFY ME'}
          </button>
        </form>
      )}

      {error && (
        <p className="mt-2 text-xs text-red-400 text-center">{error}</p>
      )}

      <p className="mt-4 text-[10px] sm:text-xs opacity-60 text-center">
        We respect your privacy and will only send updates about this event.
      </p>
    </div>
  );
};

export default SignupForm;
