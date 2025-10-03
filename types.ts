
export interface Photo {
  id: number;
  src: string;
  alt: string;
}

export interface LifeStage {
  id: 'childhood' | 'earlyTeens' | 'lateTeens' | 'youngAdulthood' | 'legacy';
  title: string;
  position: { top: string; left: string; };
  photos: Photo[];
  message: string;
}
