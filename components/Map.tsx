
import React from 'react';
import { LifeStage } from '../types';

interface MapProps {
  stages: LifeStage[];
  onMarkerClick: (stage: LifeStage) => void;
  mapImageUrl: string;
  scooterImageUrl: string;
}

const ScooterIcon: React.FC<{
  stage: LifeStage;
  onClick: (stage: LifeStage) => void;
  imageUrl: string;
}> = ({ stage, onClick, imageUrl }) => {
  return (
    <button
      onClick={() => onClick(stage)}
      className="absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none focus:ring-4 focus:ring-orange-400 focus:ring-opacity-75 rounded-full"
      style={{ top: stage.position.top, left: stage.position.left }}
      aria-label={`View memories from ${stage.title}`}
    >
      <img
        src={imageUrl}
        alt={`Scooter marker for ${stage.title}`}
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-[-5deg] animate-pulse-slow"
      />
      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#FF7043] text-white text-xs font-bold px-2 py-1 rounded-full shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {stage.title}
      </span>
    </button>
  );
};


const Map: React.FC<MapProps> = ({ stages, onMarkerClick, mapImageUrl, scooterImageUrl }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[4/3]">
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
          }
          50% {
            transform: scale(1.05);
            filter: drop-shadow(0 10px 15px rgba(0,0,0,0.2));
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
      `}</style>
      <img
        src={mapImageUrl}
        alt="A map representing a life journey"
        className="absolute inset-0 w-full h-full object-contain rounded-lg"
      />
      <div className="absolute inset-0 w-full h-full group">
        {stages.map((stage, index) => (
          <ScooterIcon
            key={stage.id}
            stage={stage}
            onClick={onMarkerClick}
            imageUrl={scooterImageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Map;
