import { MenuSection } from './menu.data';

export interface ThemeConfig {
  gold: string;
  goldLight: string;
  dark: string;
  darkCard: string;
  surface: string;
  border: string;
  textMain: string;
  textMuted: string;
  festivalClass?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  discount?: number;
  theme: ThemeConfig;
  credentials: { username: string; password: string };
  sections: MenuSection[];
}

export const THEME_PRESETS: Record<string, ThemeConfig> = {

  // Premium pure-black theme with a champagne-gold accent. App default.
  'Black Diamond': {
    gold: '#d4af37', goldLight: '#f2d98e',
    dark: '#000000', darkCard: '#0a0a0a', surface: '#151515', border: '#282828',
    textMain: '#f7f4ec', textMuted: '#9c8a5e',
  },
  'Obsidian Gold': {
    gold: '#c9a227', goldLight: '#e8c860',
    dark: '#0a0800', darkCard: '#110e04', surface: '#1a1608', border: '#2a2210',
    textMain: '#f5edd4', textMuted: '#8a7040',
  },
  'Noir Silver': {
    gold: '#b8b8b8', goldLight: '#e0e0e0',
    dark: '#080808', darkCard: '#111111', surface: '#1c1c1c', border: '#2a2a2a',
    textMain: '#f0f0f0', textMuted: '#808080',
  },
  'Midnight Copper': {
    gold: '#b87333', goldLight: '#d4956a',
    dark: '#06080e', darkCard: '#0c1018', surface: '#141c28', border: '#1e2a3c',
    textMain: '#f0e8df', textMuted: '#8a6a50',
  },
  'Onyx Emerald': {
    gold: '#2e8b57', goldLight: '#5aad7a',
    dark: '#040d08', darkCard: '#08160e', surface: '#0d2018', border: '#142e22',
    textMain: '#e8f5ee', textMuted: '#508060',
  },
  'Charcoal Mauve': {
    gold: '#c9849a', goldLight: '#e8a8bc',
    dark: '#0c0709', darkCard: '#160e12', surface: '#20141c', border: '#2e1e28',
    textMain: '#f5eef1', textMuted: '#9a7080',
  },
  'Volcanic Amber': {
    gold: '#d4720a', goldLight: '#e8a030',
    dark: '#080400', darkCard: '#120a00', surface: '#1c1200', border: '#2e1c00',
    textMain: '#f5ede0', textMuted: '#9a7030',
  },
  'Deep Plum': {
    gold: '#9b59b6', goldLight: '#c39bd3',
    dark: '#07050d', darkCard: '#0f0c1a', surface: '#181226', border: '#261a38',
    textMain: '#f0eaff', textMuted: '#806090',
  },
  'Gunmetal Teal': {
    gold: '#2a9d8f', goldLight: '#56bfb3',
    dark: '#040c0e', darkCard: '#081418', surface: '#0e1e22', border: '#162c32',
    textMain: '#e0f5f3', textMuted: '#508880',
  },
  'Carbon Crimson': {
    gold: '#a02040', goldLight: '#c84060',
    dark: '#080000', darkCard: '#120004', surface: '#1c0008', border: '#2a0010',
    textMain: '#fce8ed', textMuted: '#906070',
  },
  'Ink & Steel': {
    gold: '#4a7fa5', goldLight: '#7aaac8',
    dark: '#03060f', darkCard: '#060d1a', surface: '#0a1428', border: '#101e3a',
    textMain: '#deeeff', textMuted: '#5080a0',
  },
  // Deep forest greens with a soft sage accent (from palette reference).
  'Forest Emerald': {
    gold: '#8eb69b', goldLight: '#daf1de',
    dark: '#051f20', darkCard: '#0b2b26', surface: '#163832', border: '#235347',
    textMain: '#daf1de', textMuted: '#8eb69b',
  },
  // Muted navy slate with a warm tan accent (from palette reference).
  'Twilight Navy': {
    gold: '#f9b17a', goldLight: '#fbc79e',
    dark: '#232741', darkCard: '#2d3250', surface: '#3a3f60', border: '#474769',
    textMain: '#ffffff', textMuted: '#6b7f9d',
  },
};

export const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: 'murthal-dhaba',
    name: 'Murthal Dhaba',
    tagline: 'Asli Desi Swaad, Seedha Dil Se',
    logo: '🫓',
    theme: THEME_PRESETS['Black Diamond'],
    credentials: { username: 'admin', password: 'murthal123' },
    sections: [
      {
        name: 'PARANTHAS', icon: '🫓',
        items: [
          { name: 'Aloo Parantha',    half:  80, full: 150, isVeg: true,  popular: true  },
          { name: 'Gobhi Parantha',   half:  80, full: 150, isVeg: true                  },
          { name: 'Mooli Parantha',   half:  80, full: 150, isVeg: true                  },
          { name: 'Paneer Parantha',  half: 100, full: 180, isVeg: true,  popular: true  },
          { name: 'Mix Parantha',     half: 100, full: 180, isVeg: true,  popular: true  },
          { name: 'Onion Parantha',   half:  70, full: 130, isVeg: true                  },
          { name: 'Plain Parantha',   half:  50, full:  90, isVeg: true                  },
        ],
      },
      {
        name: 'TANDOOR', icon: '🔥',
        items: [
          { name: 'Paneer Tikka',         half: 200, full: 360, isVeg: true,  popular: true  },
          { name: 'Mushroom Tikka',       half: 170, full: 310, isVeg: true                  },
          { name: 'Hara Bhara Kebab',     half: 160, full: 290, isVeg: true                  },
        ],
      },
      {
        name: 'MAIN COURSE', icon: '🍛',
        items: [
          { name: 'Dal Makhani',          half: 180, full: 320, isVeg: true,  popular: true  },
          { name: 'Dal Tadka',            half: 150, full: 270, isVeg: true                  },
          { name: 'Sarson Ka Saag',       half: 160, full: 290, isVeg: true,  popular: true  },
          { name: 'Paneer Butter Masala', half: 230, full: 400, isVeg: true,  popular: true  },
          { name: 'Aloo Gobhi',           half: 140, full: 250, isVeg: true                  },
          { name: 'Mix Veg',              half: 150, full: 270, isVeg: true                  },
          { name: 'Chole Masala',         half: 160, full: 290, isVeg: true                  },
        ],
      },
      {
        name: 'RICE', icon: '🍚',
        items: [
          { name: 'Steamed Rice',         half:  80, full: 140, isVeg: true                  },
          { name: 'Jeera Rice',           half: 100, full: 180, isVeg: true,  popular: true  },
          { name: 'Veg Biryani',          half: 190, full: 340, isVeg: true                  },
        ],
      },
      {
        name: 'DRINKS', icon: '🥛',
        items: [
          { name: 'Sweet Lassi',          full:  80, isVeg: true,  popular: true },
          { name: 'Namkeen Lassi',        full:  80, isVeg: true                 },
          { name: 'Mango Lassi',          full: 100, isVeg: true,  popular: true },
          { name: 'Masala Chaas',         full:  60, isVeg: true                 },
          { name: 'Fresh Lime Water',     full:  50, isVeg: true                 },
          { name: 'Soft Drinks',          full:  60, isVeg: true                 },
          { name: 'Mineral Water',        full:  30, isVeg: true                 },
        ],
      },
      {
        name: 'DESSERTS', icon: '🍮',
        items: [
          { name: 'Gajar Halwa',          half: 100, full: 180, isVeg: true,  popular: true },
          { name: 'Gulab Jamun',          half:  90, full: 160, isVeg: true                 },
          { name: 'Kheer',                half: 100, full: 180, isVeg: true                 },
          { name: 'Phirni',               half: 110, full: 200, isVeg: true,  popular: true },
          { name: 'Jalebi',               half:  80, full: 150, isVeg: true                 },
        ],
      },
    ],
  },

  {
    id: 'the-mayur',
    name: 'The Mayur',
    tagline: 'Regal Flavours, Timeless Elegance',
    logo: '🦚',
    theme: THEME_PRESETS['Black Diamond'],
    credentials: { username: 'admin', password: 'mayur123' },
    sections: [
      {
        name: 'STARTERS', icon: '🥗',
        items: [
          { name: 'Dahi Ke Kebab',        half: 170, full: 300, isVeg: true,  popular: true  },
          { name: 'Hara Bhara Kebab',     half: 160, full: 290, isVeg: true                  },
          { name: 'Paneer Achari Tikka',  half: 190, full: 340, isVeg: true,  popular: true  },
        ],
      },
      {
        name: 'SOUPS', icon: '🍲',
        items: [
          { name: 'Tamatar Dhaniya Shorba', full: 130, isVeg: true,  popular: true },
          { name: 'Dal Shorba',             full: 120, isVeg: true                 },
        ],
      },
      {
        name: 'MAIN COURSE', icon: '🍛',
        items: [
          { name: 'Paneer Lababdar',      half: 240, full: 420, isVeg: true,  popular: true  },
          { name: 'Dal Bukhara',          half: 200, full: 360, isVeg: true,  popular: true  },
          { name: 'Shahi Korma (Veg)',    half: 220, full: 390, isVeg: true                  },
          { name: 'Palak Paneer',         half: 210, full: 370, isVeg: true                  },
        ],
      },
      {
        name: 'BREADS', icon: '🫓',
        items: [
          { name: 'Tandoori Roti',        full:  50, isVeg: true                  },
          { name: 'Butter Naan',          full:  70, isVeg: true,  popular: true  },
          { name: 'Garlic Naan',          full:  90, isVeg: true,  popular: true  },
          { name: 'Sheermal',             full: 100, isVeg: true                  },
          { name: 'Roomali Roti',         full:  60, isVeg: true                  },
          { name: 'Stuffed Kulcha',       full: 110, isVeg: true                  },
        ],
      },
      {
        name: 'RICE & BIRYANI', icon: '🍚',
        items: [
          { name: 'Steamed Basmati',      half:  90, full: 160, isVeg: true                  },
          { name: 'Jeera Rice',           half: 110, full: 200, isVeg: true,  popular: true  },
          { name: 'Veg Tehri',            half: 180, full: 320, isVeg: true                  },
        ],
      },
      {
        name: 'DRINKS', icon: '🥤',
        items: [
          { name: 'Kesar Lassi',          full: 150, isVeg: true,  popular: true },
          { name: 'Rose Sherbet',         full: 120, isVeg: true,  popular: true },
          { name: 'Virgin Mojito',        full: 160, isVeg: true                 },
          { name: 'Fresh Lime Soda',      full:  90, isVeg: true                 },
          { name: 'Cold Coffee',          full: 130, isVeg: true                 },
          { name: 'Soft Drinks',          full:  60, isVeg: true                 },
          { name: 'Mineral Water',        full:  30, isVeg: true                 },
        ],
      },
      {
        name: 'DESSERTS', icon: '🍮',
        items: [
          { name: 'Shahi Tukda',          half: 140, full: 250, isVeg: true,  popular: true },
          { name: 'Rasmalai',             half: 130, full: 230, isVeg: true,  popular: true },
          { name: 'Gulab Jamun',          half: 100, full: 180, isVeg: true                 },
          { name: 'Kulfi',                full: 160, isVeg: true,  popular: true            },
          { name: 'Jalebi',               half: 110, full: 200, isVeg: true                 },
          { name: 'Phirni',               half: 120, full: 210, isVeg: true                 },
        ],
      },
    ],
  },
];
