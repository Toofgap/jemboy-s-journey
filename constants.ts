
import { LifeStage } from './types';

const childhoodPhotos = (stage: string, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    src: `${import.meta.env.BASE_URL}childhood/${i + 1}.jpeg`, // look for images like public/images/childhood1.jpg
    alt: `A memory from his ${stage} years.`,
  }));
};

const earlyTeensPhotos = (stage: string, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    src: `${import.meta.env.BASE_URL}early-teens/${i + 1}.jpeg`, // look for images like public/images/childhood1.jpg
    alt: `A memory from his ${stage} years.`,
  }));
};

const lateTeensPhotos = (stage: string, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    src: `${import.meta.env.BASE_URL}late-teens/${i + 1}.jpeg`, // look for images like public/images/childhood1.jpg
    alt: `A memory from his ${stage} years.`,
  }));
};

const earlyAdulthoodPhotos = (stage: string, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    src: `${import.meta.env.BASE_URL}early-adulthood/${i + 1}.jpeg`, // look for images like public/images/childhood1.jpeg
    alt: `A memory from his ${stage} years.`,
  }));
};

const journeysEndPhotos = (stage: string, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    src: `${import.meta.env.BASE_URL}journeys-end/${i + 1}.jpeg`, // look for images like public/images/childhood1.jpg
    alt: `A memory from his ${stage} years.`,
  }));
};

export const INITIAL_LIFE_STAGES: LifeStage[] = [
  {
    id: 'childhood',
    title: 'Little Adventures',
    position: { top: '30%', left: '25%' },
    photos: childhoodPhotos('childhood', 4),
    message: "He found joy in the little things, playing with friends, watching movies when he was bored, and always making sure he looked presentable. For him, life’s adventures didn’t need to be grand, what mattered was enjoying the moment and feeling confident in himself.",
  },
  {
    id: 'earlyTeens',
    title: 'Simple Joys',
    position: { top: '55%', left: '35%' },
    photos: earlyTeensPhotos('earlyTeens', 4),
    message: "It was never hard to make him smile. Share food, help him with schoolwork, lend him a coin, or make a silly joke, and you’d see his laughter light up the room. Cooking for him in the morning or celebrating a small win, like buying pizza and coke after a game, were enough to make him happy. His joy lived in the simple, everyday moments.",
  },
  {
    id: 'lateTeens',
    title: 'Bright Days',
    position: { top: '38%', left: '55%' },
    photos: lateTeensPhotos('lateTeens', 4),
    message: "One of his proudest moments was standing with his team in a tournament, making it to the final players. The excitement, the pride, the bond with his teammates, those were the days that shone the brightest for him. His victories weren’t just his, but something he carried with all those he loved.",
  },
  {
    id: 'youngAdulthood',
    title: 'Full of Life',
    position: { top: '65%', left: '70%' },
    photos: earlyAdulthoodPhotos('youngAdulthood', 4),
    message: "He lived with a generous heart, always giving, always putting others before himself. Sometimes moody, but always kind, especially to our mother. He had a mix of strength and sweetness, making him unforgettable to anyone who truly knew him. His life was a reminder that true richness comes from giving and loving..",
  },
  {
    id: 'legacy',
    title: 'A Journey Remembered',
    position: { top: '80%', left: '60%' },
    photos: journeysEndPhotos('legacy', 4),
    message: "His passing may feel tragic, but his life was never defined by loss. His life was a blessing—a gift of kindness, care, and love to everyone around him. To us, his siblings, he was silently sweet; to our parents, he was a source of pride and protection. He stood strong for us, defended us, and loved us in ways we will never forget. His journey continues in the hearts he touched.",
  },
];
