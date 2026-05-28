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

  // ── Classic ──────────────────────────────────────────
  'Royal Gold': {
    gold: '#c9962b', goldLight: '#f0c96a',
    dark: '#1a1209', darkCard: '#231a08', surface: '#2c2010', border: '#3d2e10',
    textMain: '#f5e8c8', textMuted: '#a08850',
  },
  'Crimson Red': {
    gold: '#c0392b', goldLight: '#e74c3c',
    dark: '#120808', darkCard: '#1e0d0d', surface: '#2a1010', border: '#3d1515',
    textMain: '#fde8e8', textMuted: '#a06060',
  },
  'Ocean Blue': {
    gold: '#2980b9', goldLight: '#5dade2',
    dark: '#080f18', darkCard: '#0d1a27', surface: '#102233', border: '#153047',
    textMain: '#e0f0ff', textMuted: '#5a88aa',
  },
  'Forest Green': {
    gold: '#27ae60', goldLight: '#58d68d',
    dark: '#081209', darkCard: '#0d1e0f', surface: '#102814', border: '#15391a',
    textMain: '#e0f5e8', textMuted: '#5a9a6a',
  },
  'Midnight Purple': {
    gold: '#8e44ad', goldLight: '#bb8fce',
    dark: '#0d0812', darkCard: '#160f1e', surface: '#1e1428', border: '#2c1c3d',
    textMain: '#f0e8ff', textMuted: '#8060a0',
  },

  // ── Classy ───────────────────────────────────────────
  'Velvet Noir': {
    gold: '#c9a0b4', goldLight: '#e8c8d8',
    dark: '#0d080c', darkCard: '#1a1020', surface: '#251530', border: '#352040',
    textMain: '#f5eef2', textMuted: '#9a7888',
  },
  'Midnight Gold': {
    gold: '#c9a227', goldLight: '#e8c860',
    dark: '#0b1b3a', darkCard: '#0f2248', surface: '#162b55', border: '#1f3a6a',
    textMain: '#f5edd4', textMuted: '#9a8850',
  },
  'Emerald Bistro': {
    gold: '#b48a5a', goldLight: '#d4aa7a',
    dark: '#0e1f18', darkCard: '#142a20', surface: '#1a3828', border: '#243f30',
    textMain: '#eff5e8', textMuted: '#7a9870',
  },
  'Rosewood': {
    gold: '#d4a574', goldLight: '#eac8a0',
    dark: '#120a0a', darkCard: '#1e1212', surface: '#2a1a1a', border: '#3a2020',
    textMain: '#f5eae0', textMuted: '#9a7060',
  },
  'Sapphire': {
    gold: '#5b8db8', goldLight: '#e8d5b7',
    dark: '#0d1b2a', darkCard: '#12253a', surface: '#172e4a', border: '#1f3c5e',
    textMain: '#e8f4ff', textMuted: '#6890b8',
  },
  'Burgundy': {
    gold: '#d4af37', goldLight: '#f0d060',
    dark: '#1a0e0e', darkCard: '#261414', surface: '#321a1a', border: '#402020',
    textMain: '#f5e8e8', textMuted: '#9a7070',
  },

  // ── Festival ─────────────────────────────────────────
  'Diwali': {
    gold: '#f7a520', goldLight: '#ffd700',
    dark: '#100800', darkCard: '#180c00', surface: '#221200', border: '#331a00',
    textMain: '#fff5e0', textMuted: '#cc8820',
    festivalClass: 'theme-diwali',
  },
  'Holi': {
    gold: '#ff2d95', goldLight: '#ff80cc',
    dark: '#0a0010', darkCard: '#100020', surface: '#180030', border: '#240040',
    textMain: '#fff0ff', textMuted: '#cc3399',
    festivalClass: 'theme-holi',
  },
  'Navratri': {
    gold: '#fa7f22', goldLight: '#ffa855',
    dark: '#120500', darkCard: '#1f0a00', surface: '#2e1200', border: '#401a00',
    textMain: '#fff0e0', textMuted: '#cc6611',
    festivalClass: 'theme-navratri',
  },
  'Independence Day': {
    gold: '#ff7300', goldLight: '#ffaa55',
    dark: '#020a1c', darkCard: '#051428', surface: '#081e3a', border: '#0d2850',
    textMain: '#f0f6ff', textMuted: '#5070aa',
    festivalClass: 'theme-independence',
  },
  'Eid': {
    gold: '#00900a', goldLight: '#cfb53b',
    dark: '#010d08', darkCard: '#041810', surface: '#072518', border: '#0c3525',
    textMain: '#e0fff0', textMuted: '#309060',
    festivalClass: 'theme-eid',
  },
  'Christmas': {
    gold: '#c41e3a', goldLight: '#ffd700',
    dark: '#010a04', darkCard: '#041508', surface: '#082010', border: '#0f2e18',
    textMain: '#f0fff2', textMuted: '#307040',
    festivalClass: 'theme-christmas',
  },
};

export const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: 'murthal-dhaba',
    name: 'Murthal Dhaba',
    tagline: 'Asli Desi Swaad, Seedha Dil Se',
    logo: '🫓',
    theme: THEME_PRESETS['Royal Gold'],
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
          { name: 'Keema Parantha',   half: 120, full: 220, isVeg: false, popular: true  },
        ],
      },
      {
        name: 'TANDOOR', icon: '🔥',
        items: [
          { name: 'Paneer Tikka',         half: 200, full: 360, isVeg: true,  popular: true  },
          { name: 'Mushroom Tikka',       half: 170, full: 310, isVeg: true                  },
          { name: 'Chicken Tikka',        half: 230, full: 420, isVeg: false, popular: true  },
          { name: 'Seekh Kebab',          half: 220, full: 400, isVeg: false, popular: true  },
          { name: 'Tandoori Chicken',     half: 250, full: 450, isVeg: false, popular: true  },
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
          { name: 'Butter Chicken',       half: 260, full: 460, isVeg: false, popular: true  },
          { name: 'Chicken Kadhai',       half: 250, full: 440, isVeg: false                 },
          { name: 'Mutton Curry',         half: 300, full: 540, isVeg: false, popular: true  },
        ],
      },
      {
        name: 'RICE', icon: '🍚',
        items: [
          { name: 'Steamed Rice',         half:  80, full: 140, isVeg: true                  },
          { name: 'Jeera Rice',           half: 100, full: 180, isVeg: true,  popular: true  },
          { name: 'Veg Biryani',          half: 190, full: 340, isVeg: true                  },
          { name: 'Chicken Biryani',      half: 230, full: 420, isVeg: false, popular: true  },
          { name: 'Mutton Biryani',       half: 290, full: 520, isVeg: false, popular: true  },
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
    theme: THEME_PRESETS['Midnight Gold'],
    credentials: { username: 'admin', password: 'mayur123' },
    sections: [
      {
        name: 'STARTERS', icon: '🥗',
        items: [
          { name: 'Dahi Ke Kebab',        half: 170, full: 300, isVeg: true,  popular: true  },
          { name: 'Hara Bhara Kebab',     half: 160, full: 290, isVeg: true                  },
          { name: 'Paneer Achari Tikka',  half: 190, full: 340, isVeg: true,  popular: true  },
          { name: 'Chicken Malai Tikka',  half: 240, full: 440, isVeg: false, popular: true  },
          { name: 'Galouti Kebab',        half: 280, full: 500, isVeg: false, popular: true  },
          { name: 'Fish Amritsari',       half: 260, full: 460, isVeg: false                 },
          { name: 'Lamb Seekh Kebab',     half: 300, full: 540, isVeg: false                 },
        ],
      },
      {
        name: 'SOUPS', icon: '🍲',
        items: [
          { name: 'Tamatar Dhaniya Shorba', full: 130, isVeg: true,  popular: true },
          { name: 'Dal Shorba',             full: 120, isVeg: true                 },
          { name: 'Murgh Shorba',           full: 160, isVeg: false                },
          { name: 'Mulligatawny',           full: 150, isVeg: false, popular: true },
        ],
      },
      {
        name: 'MAIN COURSE', icon: '🍛',
        items: [
          { name: 'Paneer Lababdar',      half: 240, full: 420, isVeg: true,  popular: true  },
          { name: 'Dal Bukhara',          half: 200, full: 360, isVeg: true,  popular: true  },
          { name: 'Shahi Korma (Veg)',    half: 220, full: 390, isVeg: true                  },
          { name: 'Palak Paneer',         half: 210, full: 370, isVeg: true                  },
          { name: 'Chicken Chettinad',    half: 270, full: 480, isVeg: false, popular: true  },
          { name: 'Mutton Nihari',        half: 340, full: 600, isVeg: false, popular: true  },
          { name: 'Lamb Rogan Josh',      half: 320, full: 580, isVeg: false, popular: true  },
          { name: 'Fish Moilee',          half: 290, full: 520, isVeg: false                 },
          { name: 'Prawn Masala',         half: 310, full: 560, isVeg: false                 },
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
          { name: 'Chicken Dum Biryani',  half: 260, full: 480, isVeg: false, popular: true  },
          { name: 'Dum Gosht Biryani',    half: 340, full: 620, isVeg: false, popular: true  },
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
