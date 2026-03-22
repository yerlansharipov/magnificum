import heroImg from '../assets/art/hero_artwork.jpg';
import heritage1 from '../assets/art/heritage_1.jpg';
import pop1 from '../assets/art/pop_1.jpg';
import civic1 from '../assets/art/civic_1.jpg';
import art5 from '../assets/art/art_5.jpg';
import art6 from '../assets/art/art_6.jpg';

export const categories = [
  {
    id: 'heritage',
    label: 'Heritage & Identity',
    emoji: '🏺',
    color: '#0D9488',
    description: 'Traditional dress, Shanyrak, ethnic patterns, family and the enduring spirit of the Kazakh steppe.'
  },
  {
    id: 'pop',
    label: 'Pop Culture / Icons',
    emoji: '🎵',
    color: '#2563EB',
    description: 'Q-Pop, Ninety One fan art, contemporary Kazakh celebrities, and the vibrant pulse of local youth culture.'
  },
  {
    id: 'civic',
    label: 'Civic Stance',
    emoji: '📢',
    color: '#E11D48',
    description: "Social commentary, women's rights, political satire, and the visual language of modern activism in Kazakhstan."
  }
];

export const artworks = [
  {
    id: 1,
    title: "Тамыр терең (Roots Run Deep)",
    category: "heritage",
    image: heroImg,
    accent: '#0D9488',
    description: "An exploration of nomadic identity through the lens of modern street style and traditional Kazakh Saukele.",
    tags: ["Heritage", "Saukele", "Streetwear"],
    date: "2024",
    emoji: "🏺"
  },
  {
    id: 2,
    title: "Ұлы Дала (Great Steppe Bride)",
    category: "heritage",
    image: heritage1,
    accent: '#0D9488',
    description: "Traditional Kazakh bride portrait with intricate silver ornaments and a tall velvet Saukele.",
    tags: ["Heritage", "Ornaments", "Gold"],
    date: "2023",
    emoji: "👑"
  },
  {
    id: 3,
    title: "Ninety One — AZ Portrait",
    category: "pop",
    image: pop1,
    accent: '#2563EB',
    description: "Stylized digital portrait of a Q-pop icon, featuring neon accents and contemporary graphic elements.",
    tags: ["Pop Culture", "Q-Pop", "Neon"],
    date: "2023",
    emoji: "🎵"
  },
  {
    id: 4,
    title: "Шамшырақ (The Beacon)",
    category: "civic",
    image: civic1,
    accent: '#E11D48',
    description: "A symbolic piece depicting women holding the Shanyrak together, representing unity and the light of justice.",
    tags: ["Civic", "Women's Rights", "Shanyrak"],
    date: "2024",
    emoji: "🕯️"
  },
  {
    id: 5,
    title: "Бостандық (Freedom)",
    category: "civic",
    image: art5,
    accent: '#E11D48',
    description: "Commentary on the fight for freedom of expression in Kazakhstan.",
    tags: ["Civic", "Social", "Red"],
    date: "2022",
    emoji: "🕊️"
  },
  {
    id: 6,
    title: "Zaq — Digital Glow",
    category: "pop",
    image: art6,
    accent: '#2563EB',
    description: "Electric-hued fan art inspired by the futuristic aesthetics of Ninety One's music videos.",
    tags: ["Pop", "Digital", "Blue"],
    date: "2023",
    emoji: "⚡"
  }
];
