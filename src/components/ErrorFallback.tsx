import React from 'react';

interface ErrorFallbackProps {
  error: Error;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-red-900 px-4 text-center">
      <div className="bg-red-800 rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Oups ! Une erreur est survenue.</h1>
        <p className="mb-4">Notre équipe a été alertée. Vous pouvez réessayer plus tard.</p>
        <div className="bg-red-700 p-3 rounded mb-4 overflow-auto">
          <pre className="text-xs opacity-80 break-words">{error.message}</pre>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-white hover:bg-gray-100 text-red-800 font-semibold py-2 px-4 rounded transition duration-200"
        >
          Recharger la page
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
