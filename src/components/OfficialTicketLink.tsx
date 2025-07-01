import React from 'react';

const OfficialTicketLink: React.FC = () => {
  return (
    <div className="mt-6 sm:mt-10 text-center">
      <a
        href="https://www.bizouk.com/events/details/bk-x-w/99654"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-center px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 shadow-lg"
      >
        🎟️ Billetterie officielle<br />
        <span className="text-xs sm:text-sm font-normal">
          (packs bouteilles – restauration – les extras)
        </span>
      </a>
    </div>
  );
};

export default OfficialTicketLink;
