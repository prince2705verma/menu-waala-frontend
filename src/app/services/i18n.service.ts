import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'hi';

/** Static UI strings keyed by a short id, one entry per language. */
const UI: Record<string, Record<Lang, string>> = {
  searchPlaceholder: { en: 'Search dishes...',   hi: 'व्यंजन खोजें...' },
  all:               { en: 'All',                hi: 'सभी' },
  veg:               { en: 'Veg',                hi: 'शाकाहारी' },
  nonveg:            { en: 'Non-Veg',            hi: 'मांसाहारी' },
  popular:           { en: 'Popular',            hi: 'लोकप्रिय' },
  half:              { en: 'HALF',               hi: 'आधा' },
  full:              { en: 'FULL',               hi: 'पूरा' },
  items:             { en: 'items',              hi: 'व्यंजन' },
  manage:            { en: 'Manage',             hi: 'प्रबंधन' },
  offSuffix:         { en: 'OFF on all items today!', hi: 'की छूट आज सभी व्यंजनों पर!' },
  footerTaxes:       { en: 'All prices are inclusive of taxes',
                       hi: 'सभी कीमतें करों सहित हैं' },
  footerAvailability:{ en: 'Subject to availability', hi: 'उपलब्धता के अधीन' },
  notFoundTitle:     { en: 'Restaurant not found', hi: 'रेस्तरां नहीं मिला' },
  notFoundText:      { en: 'Check the URL and try again.',
                       hi: 'URL जांचें और पुनः प्रयास करें।' },
  emptyState:        { en: 'No dishes found. Try a different search.',
                       hi: 'कोई व्यंजन नहीं मिला। कोई और खोज आज़माएं।' },
};

/** Section-name translations (English key → Hindi). */
const SECTIONS: Record<string, string> = {
  'PARANTHAS':       'पराठे',
  'TANDOOR':         'तंदूर',
  'MAIN COURSE':     'मुख्य व्यंजन',
  'RICE':            'चावल',
  'DRINKS':          'पेय',
  'DESSERTS':        'मिठाई',
  'STARTERS':        'स्टार्टर',
  'SOUPS':           'सूप',
  'BREADS':          'रोटी',
  'RICE & BIRYANI':  'चावल और बिरयानी',
};

/** Dish-name translations (English key → Hindi). */
const DISHES: Record<string, string> = {
  'Aloo Parantha':          'आलू पराठा',
  'Gobhi Parantha':         'गोभी पराठा',
  'Mooli Parantha':         'मूली पराठा',
  'Paneer Parantha':        'पनीर पराठा',
  'Mix Parantha':           'मिक्स पराठा',
  'Onion Parantha':         'प्याज़ पराठा',
  'Plain Parantha':         'सादा पराठा',
  'Paneer Tikka':           'पनीर टिक्का',
  'Mushroom Tikka':         'मशरूम टिक्का',
  'Hara Bhara Kebab':       'हरा भरा कबाब',
  'Dal Makhani':            'दाल मखनी',
  'Dal Tadka':              'दाल तड़का',
  'Sarson Ka Saag':         'सरसों का साग',
  'Paneer Butter Masala':   'पनीर बटर मसाला',
  'Aloo Gobhi':             'आलू गोभी',
  'Mix Veg':                'मिक्स वेज',
  'Steamed Rice':           'उबले चावल',
  'Jeera Rice':             'जीरा चावल',
  'Veg Biryani':            'वेज बिरयानी',
  'Sweet Lassi':            'मीठी लस्सी',
  'Mango Lassi':            'मैंगो लस्सी',
  'Fresh Lime Soda':        'फ्रेश लाइम सोडा',
  'Soft Drinks':            'सॉफ्ट ड्रिंक्स',
  'Mineral Water':          'मिनरल वाटर',
  'Gajar Halwa':            'गाजर का हलवा',
  'Gulab Jamun':            'गुलाब जामुन',
  'Jalebi':                 'जलेबी',
  'Dahi Ke Kebab':          'दही के कबाब',
  'Paneer Achari Tikka':    'पनीर अचारी टिक्का',
  'Tamatar Dhaniya Shorba': 'टमाटर धनिया शोरबा',
  'Dal Shorba':             'दाल शोरबा',
  'Paneer Lababdar':        'पनीर लबाबदार',
  'Dal Bukhara':            'दाल बुखारा',
  'Shahi Korma (Veg)':      'शाही कोरमा (वेज)',
  'Palak Paneer':           'पालक पनीर',
  'Tandoori Roti':          'तंदूरी रोटी',
  'Butter Naan':            'बटर नान',
  'Garlic Naan':            'गार्लिक नान',
  'Sheermal':               'शीरमाल',
  'Roomali Roti':           'रूमाली रोटी',
  'Stuffed Kulcha':         'स्टफ्ड कुल्चा',
  'Steamed Basmati':        'उबले बासमती चावल',
  'Veg Tehri':              'वेज तहरी',
  'Kesar Lassi':            'केसर लस्सी',
  'Rose Sherbet':           'गुलाब शरबत',
  'Virgin Mojito':          'वर्जिन मोहितो',
  'Cold Coffee':            'कोल्ड कॉफ़ी',
  'Shahi Tukda':            'शाही टुकड़ा',
  'Rasmalai':               'रसमलाई',
  'Kulfi':                  'कुल्फी',
};

/** Tagline translations (English key → Hindi). */
const TAGLINES: Record<string, string> = {
  'Asli Desi Swaad, Seedha Dil Se': 'असली देसी स्वाद, सीधे दिल से',
  'Regal Flavours, Timeless Elegance': 'शाही ज़ायका, कालजयी शान',
};

const STORAGE_KEY = 'rm_lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(this.load());

  private load(): Lang {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'hi' ? 'hi' : 'en';
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }

  toggle(): void {
    this.setLang(this.lang() === 'en' ? 'hi' : 'en');
  }

  /** Static UI string by id — falls back to the id itself if unknown. */
  ui(key: string): string {
    return UI[key]?.[this.lang()] ?? key;
  }

  /** Translate a section name; unknown names pass through unchanged. */
  section(name: string): string {
    if (this.lang() === 'en') return name;
    return SECTIONS[name] ?? name;
  }

  /** Translate a dish name; unknown dishes pass through unchanged. */
  dish(name: string): string {
    if (this.lang() === 'en') return name;
    return DISHES[name] ?? name;
  }

  /** Translate a tagline; unknown taglines pass through unchanged. */
  tagline(text: string): string {
    if (this.lang() === 'en') return text;
    return TAGLINES[text] ?? text;
  }
}
