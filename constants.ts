
import { LifeStage } from './types';

const generatePhotos = (stage: string, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    src: `https://picsum.photos/seed/${stage}${i}/400/300`,
    alt: `A memory from his ${stage} years.`,
  }));
};

export const INITIAL_LIFE_STAGES: LifeStage[] = [
  {
    id: 'childhood',
    title: 'Childhood',
    position: { top: '30%', left: '25%' },
    photos: generatePhotos('childhood', 6),
    message: "A time of boundless energy and scraped knees, where every day was a new adventure waiting to be discovered. His first bike had training wheels, but his spirit was already soaring.",
  },
  {
    id: 'earlyTeens',
    title: 'Early Teens',
    position: { top: '55%', left: '35%' },
    photos: generatePhotos('earlyTeens', 5),
    message: "The world started to open up. Friendships deepened, passions ignited, and the training wheels came off for good. The dream of the open road began to take shape.",
  },
  {
    id: 'lateTeens',
    title: 'Late Teens',
    position: { top: '38%', left: '55%' },
    photos: generatePhotos('lateTeens', 7),
    message: "With a learner's permit in hand and a heart full of ambition, these were the years of freedom. The scooter wasn't just a vehicle; it was a companion on journeys big and small.",
  },
  {
    id: 'youngAdulthood',
    title: 'Young Adulthood',
    position: { top: '65%', left: '70%' },
    photos: generatePhotos('youngAdulthood', 6),
    message: "Navigating the complexities of life, he always found clarity on two wheels. The road taught him resilience, independence, and the joy of the journey itself.",
  },
  {
    id: 'legacy',
    title: 'His Legacy',
    position: { top: '80%', left: '85%' },
    photos: generatePhotos('legacy', 4),
    message: "Though his journey was cut short, the path he paved with kindness, laughter, and an adventurous spirit continues on. His legacy is the love he shared and the memories he created.",
  },
];
