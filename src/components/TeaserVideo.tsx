import React from 'react';

const TeaserVideo: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto my-8 px-4 text-center">
      {/* Conteneur au ratio 4:5 */}
      <div className="relative w-full pt-[125%] rounded-xl overflow-hidden border border-yellow-400 shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/paqQMJVyAZY"
          title="Teaser Épisode 2 DJ W+"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Bouton YouTube */}
      <a
        href="https://youtube.com/shorts/paqQMJVyAZY"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm px-5 py-2 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-300 transition"
      >
        🎬 Regarde l’épisode 2 officiel maintenant !
      </a>
    </div>
  );
};

export default TeaserVideo;
