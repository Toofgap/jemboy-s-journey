
import React, { useState, useEffect, useCallback } from 'react';
import { LifeStage } from './types';
import { INITIAL_LIFE_STAGES } from './constants';
import Map from './components/Map';
import GalleryModal from './components/GalleryModal';

const scooterImageUrl = `${import.meta.env.BASE_URL}images/scooter.png`;
const mapImageUrl = `${import.meta.env.BASE_URL}images/map.jpeg`;
;

export default function App() {
  const [stagesData, setStagesData] = useState<LifeStage[]>(INITIAL_LIFE_STAGES);
  const [selectedStage, setSelectedStage] = useState<LifeStage | null>(null);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMarkerClick = (stage: LifeStage) => {
    setSelectedStage(stage);
  };

  const handleCloseModal = () => {
    setSelectedStage(null);
  };

  return (
    <div className="min-h-screen bg-[#E0F7FA] text-gray-800 flex flex-col items-center p-4 sm:p-8 transition-all duration-500">
      <header className="text-center mb-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#00796B] drop-shadow-sm">A Ride Through Memory Lane</h1>
        <p className="text-lg text-gray-600 mt-2">In loving memory of a free spirit.</p>
      </header>

      <main className="w-full max-w-5xl bg-white/50 rounded-2xl shadow-xl p-4 sm:p-6 backdrop-blur-sm border border-white/30">
        <p className="text-center mb-4 text-gray-700">
          Click on a scooter to explore photos and memories from different chapters of his life.
        </p>
        
            <Map
                stages={stagesData}
                onMarkerClick={handleMarkerClick}
                mapImageUrl={mapImageUrl}
                scooterImageUrl={scooterImageUrl}
            />
      </main>

      <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>Forever riding in our hearts.</p>
      </footer>
      
      {selectedStage && (
        <GalleryModal 
            stage={selectedStage} 
            onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}
