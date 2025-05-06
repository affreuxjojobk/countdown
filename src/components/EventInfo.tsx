import React from 'react';
import { Music, Calendar, MapPin } from 'lucide-react';

const EventInfo: React.FC = () => {
  return (
    <div className="w-full text-center">
      {/* Branding */}
      <div className="mb-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">
          <span className="font-dancing mb-2 block">Beautiful</span>
          <span className="font-bold tracking-wider block mb-2">KREYOL</span>
          <span className="inline-block mx-4 text-2xl">×</span>
          <span className="font-dancing">DJ W+</span>
        </h1>
      </div>

      {/* Event Details */}
      <div className="mt-6 flex flex-col gap-2 items-center opacity-80">
        <div className="flex items-center gap-2">
          <Music size={16} />
          <span>Dance Event</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>September 6, 2025</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>Location To Be Announced</span>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;