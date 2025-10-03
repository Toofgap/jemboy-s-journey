
import React, { useEffect, useState } from 'react';
import { LifeStage } from '../types';

interface GalleryModalProps {
  stage: LifeStage;
  onClose: () => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const GalleryModal: React.FC<GalleryModalProps> = ({ stage, onClose }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    // Mount animation
    setIsShowing(true);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setIsShowing(false);
    setTimeout(onClose, 300); // Wait for animation to finish
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${isShowing ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-title"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isShowing ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-6 border-b border-gray-200 flex justify-between items-center bg-[#FFE0B2]/50">
          <h2 id="gallery-title" className="text-3xl font-bold text-[#BF360C]">
            {stage.title}
          </h2>
          <button
            onClick={handleClose}
            className="p-2 rounded-full text-gray-500 hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
            aria-label="Close gallery"
          >
            <CloseIcon className="w-6 h-6"/>
          </button>
        </header>

        <div className="flex-grow overflow-y-auto p-6">
          <p className="mb-6 text-gray-600 text-lg leading-relaxed italic border-l-4 border-[#FF7043] pl-4">
            "{stage.message}"
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {stage.photos.map((photo) => (
              <div key={photo.id} className="overflow-hidden rounded-lg shadow-md group aspect-w-1 aspect-h-1">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
