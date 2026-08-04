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

  // ── Bold "wow-factor" themes — vivid accent gradients over jewel-toned bases ──

  // Electric magenta → cyan over deep indigo. Neon-city energy.
  'Cyberpunk Neon': {
    gold: '#ff2e9a', goldLight: '#00e5ff',
    dark: '#0a0612', darkCard: '#120a20', surface: '#1b1030', border: '#2e1a4e',
    textMain: '#f5e9ff', textMuted: '#a06ec0',
  },
  // Sunset orange → hot pink over royal purple. Retro synthwave.
  'Synthwave Sunset': {
    gold: '#ff7a3d', goldLight: '#ff2e9a',
    dark: '#12071a', darkCard: '#1c0c28', surface: '#281038', border: '#3d1a58',
    textMain: '#ffe9f2', textMuted: '#b06a90',
  },
  // Mint → ice-blue over deep teal. Northern-lights glow.
  'Aurora Frost': {
    gold: '#3ef0c0', goldLight: '#7ce8ff',
    dark: '#04120f', darkCard: '#081e1a', surface: '#0d2b26', border: '#164439',
    textMain: '#e6fff6', textMuted: '#4fa08c',
  },
  // Violet → pink over cosmic black. Deep-space nebula.
  'Galactic Violet': {
    gold: '#a865ff', goldLight: '#ff86d8',
    dark: '#0a0618', darkCard: '#130a26', surface: '#1d1038', border: '#301a58',
    textMain: '#f2e9ff', textMuted: '#8a6ab0',
  },
  // Fiery orange → molten amber over charcoal. Lava heat.
  'Molten Lava': {
    gold: '#ff4d1c', goldLight: '#ffb020',
    dark: '#0f0503', darkCard: '#1a0a04', surface: '#261006', border: '#3d1c0a',
    textMain: '#ffece0', textMuted: '#b06a40',
  },
  // Electric blue → cyan over midnight navy. Cold and crisp.
  'Electric Sapphire': {
    gold: '#2f7bff', goldLight: '#38d6ff',
    dark: '#03081a', darkCard: '#071026', surface: '#0c1a3a', border: '#152c58',
    textMain: '#e6f0ff', textMuted: '#5a7ab0',
  },
  // Ruby red → coral over blackberry. Vivid and passionate.
  'Ruby Bloom': {
    gold: '#ff2d55', goldLight: '#ff9166',
    dark: '#12040a', darkCard: '#1e0812', surface: '#2b0e1c', border: '#421830',
    textMain: '#ffe9ee', textMuted: '#b0607a',
  },
  // Emerald → neon lime over forest black. Electric and fresh.
  'Emerald Neon': {
    gold: '#12e29a', goldLight: '#a6ff5c',
    dark: '#05120c', darkCard: '#0a1e14', surface: '#102b1e', border: '#184433',
    textMain: '#e6fff0', textMuted: '#4fa878',
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
  // Rose-gold on near-black — soft, luxurious, feminine-premium.
  'Rose Noir': {
    gold: '#e0a899', goldLight: '#f2c9bd',
    dark: '#0b0708', darkCard: '#140e0f', surface: '#1e1618', border: '#2c2124',
    textMain: '#f7ecec', textMuted: '#9a7d78',
  },
  // Platinum-cool metallic — sleek, modern, understated luxury.
  'Platinum Frost': {
    gold: '#c5cdd6', goldLight: '#e8edf2',
    dark: '#070809', darkCard: '#101214', surface: '#191c1f', border: '#282d32',
    textMain: '#eef2f5', textMuted: '#7a848e',
  },
  // Deep bordeaux with warm gold — wine-cellar, fine-dining feel.
  'Burgundy Reserve': {
    gold: '#c99a5b', goldLight: '#e6c088',
    dark: '#0d0507', darkCard: '#180a0e', surface: '#241016', border: '#361a22',
    textMain: '#f7ece8', textMuted: '#a07868',
  },
  // Sapphire blue on ink — cold, jewel-like, high-end tech premium.
  'Royal Sapphire': {
    gold: '#4d7cff', goldLight: '#88a8ff',
    dark: '#04060f', darkCard: '#080d1c', surface: '#0e152b', border: '#182242',
    textMain: '#e8eeff', textMuted: '#5a6ea0',
  },
  // Rich espresso browns with caramel — warm, cozy, cafe-luxury.
  'Espresso Cream': {
    gold: '#c8a06a', goldLight: '#e4c495',
    dark: '#0b0705', darkCard: '#150f0a', surface: '#211812', border: '#31241a',
    textMain: '#f5ede2', textMuted: '#9c8060',
  },
  // Champagne on graphite — timeless, elegant, red-carpet premium.
  'Graphite Champagne': {
    gold: '#e5d3a3', goldLight: '#f4e8c8',
    dark: '#0a0a0b', darkCard: '#131415', surface: '#1d1e20', border: '#2c2e31',
    textMain: '#f4f0e6', textMuted: '#8c8778',
  },
  // Amethyst violet on black — mysterious, opulent, jewel-toned.
  'Black Amethyst': {
    gold: '#a678d8', goldLight: '#c9a3ec',
    dark: '#07050c', darkCard: '#0f0b18', surface: '#181026', border: '#261a3a',
    textMain: '#f0eafb', textMuted: '#7a6398',
  },
  // Aged bronze on deep umber — antique, artisanal, heritage luxury.
  'Antique Bronze': {
    gold: '#cd7f32', goldLight: '#e3a55e',
    dark: '#0a0704', darkCard: '#140e07', surface: '#1e160c', border: '#2e2214',
    textMain: '#f4ebdd', textMuted: '#987850',
  },
};

export const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: 'murthal-dhaba',
    name: 'Murthal Dhaba',
    tagline: 'Asli Desi Swaad, Seedha Dil Se',
    logo: '🫓',
    theme: THEME_PRESETS['Rose Noir'],
    credentials: { username: 'admin', password: 'murthal123' },
    sections: [
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
        name: 'PARANTHAS', icon: '🫓',
        items: [
          { name: 'Aloo Parantha',    full: 150, isVeg: true,  popular: true  },
          { name: 'Gobhi Parantha',   full: 150, isVeg: true                  },
          { name: 'Mooli Parantha',   full: 150, isVeg: true                  },
          { name: 'Paneer Parantha',  full: 180, isVeg: true,  popular: true  },
          { name: 'Mix Parantha',     full: 180, isVeg: true,  popular: true  },
          { name: 'Onion Parantha',   full: 130, isVeg: true                  },
          { name: 'Plain Parantha',   full:  90, isVeg: true                  },
        ],
      },
      {
        name: 'DRINKS', icon: '🥛',
        items: [
          { name: 'Sweet Lassi',          full:  80, isVeg: true,  popular: true },
          { name: 'Mango Lassi',          full: 100, isVeg: true,  popular: true },
          { name: 'Fresh Lime Soda',      full:  50, isVeg: true                 },
          { name: 'Soft Drinks',          full:  60, isVeg: true                 },
          { name: 'Mineral Water',        full:  30, isVeg: true                 },
        ],
      },
      {
        name: 'DESSERTS', icon: '🍮',
        items: [
          { name: 'Gajar Halwa',          half: 100, full: 180, isVeg: true,  popular: true },
          { name: 'Gulab Jamun',          half:  90, full: 160, isVeg: true                 },
          { name: 'Jalebi',               half:  80, full: 150, isVeg: true                 },
        ],
      },
    ],
  },

  {
    id: 'the-mayur',
    name: 'The Mayur',
    tagline: 'Regal Flavours, Timeless Elegance',
    logo: 'assets/logos/mayur-urban-spice.png',
    theme: THEME_PRESETS['Rose Noir'],
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
        ],
      },
    ],
  },
];
