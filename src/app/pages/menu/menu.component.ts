import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../restaurants.data';
import { MenuSection } from '../../menu.data';
import { RestaurantService } from '../../services/restaurant.service';
import { ThemeService } from '../../services/theme.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  restaurant: Restaurant | null = null;
  activeSection = '';
  searchQuery = '';
  filterVeg: 'all' | 'veg' | 'nonveg' = 'all';
  notFound = false;
  readonly particles = Array.from({ length: 15 }, (_, i) => i);

  get festivalClass(): string { return this.restaurant?.theme.festivalClass ?? ''; }
  get discount(): number { return this.restaurant?.discount ?? 0; }
  discounted(price: number): number {
    return Math.round(price * (1 - this.discount / 100));
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService,
    private themeService: ThemeService,
    public auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('restaurantId') ?? 'royal-kitchen';
      const data = this.restaurantService.getRestaurant(id);
      if (!data) { this.notFound = true; return; }
      this.restaurant = data;
      this.activeSection = data.sections[0]?.name ?? '';
      this.themeService.apply(data.theme);
    });
  }

  get filteredSections(): MenuSection[] {
    if (!this.restaurant) return [];
    const q = this.searchQuery.trim().toLowerCase();
    return this.restaurant.sections
      .map(s => ({
        ...s,
        items: s.items.filter(item => {
          const matchSearch = !q || item.name.toLowerCase().includes(q);
          const matchFilter =
            this.filterVeg === 'all' ||
            (this.filterVeg === 'veg' && item.isVeg) ||
            (this.filterVeg === 'nonveg' && !item.isVeg);
          return matchSearch && matchFilter;
        }),
      }))
      .filter(s => s.items.length > 0);
  }

  get isSearching(): boolean {
    return this.searchQuery.trim().length > 0 || this.filterVeg !== 'all';
  }

  // True when the current restaurant has at least one non-veg item. Used to
  // hide the Non-Veg filter pill on fully vegetarian menus.
  get hasNonVeg(): boolean {
    return this.restaurant?.sections.some(s => s.items.some(i => !i.isVeg)) ?? false;
  }

  scrollToSection(name: string): void {
    this.activeSection = name;
    if (this.isSearching) return;
    document.getElementById('section-' + name)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  setFilter(v: 'all' | 'veg' | 'nonveg'): void { this.filterVeg = v; }
  clearSearch(): void { this.searchQuery = ''; }

  isImageUrl(val: string): boolean {
    return /^https?:\/\//i.test(val);
  }

  // Local white-background product photos bundled with the app. Highest
  // priority — used ahead of any remote source. Most specific patterns first.
  private readonly LOCAL_IMAGES: [RegExp, string][] = [
    [/aloo parantha/i,    'assets/menu/aloo-parantha.png'],
    [/gob(h)?i parantha/i, 'assets/menu/gobhi-parantha.png'],
    [/mix parantha/i,     'assets/menu/mix-parantha.png'],
    [/mooli parantha/i,   'assets/menu/mooli-parantha.png'],
    [/onion parantha/i,   'assets/menu/onion-parantha.png'],
    [/paneer parantha/i,  'assets/menu/paneer-parantha.png'],
    [/plain parantha/i,   'assets/menu/plain-parantha.png'],
  ];

  private localImageFor(name: string): string | null {
    for (const [pattern, url] of this.LOCAL_IMAGES) {
      if (pattern.test(name)) return url;
    }
    return null;
  }

  // True when the dish uses a local white-background product shot, so the
  // template can render it "contained" on white instead of cropping a photo.
  isProductImage(name: string): boolean {
    return this.localImageFor(name) !== null;
  }

  // Curated, verified dish photos (Wikimedia Commons). Checked before the
  // loremflickr keyword fallback so these dishes always show the right food.
  // Most specific patterns must come first.
  private readonly CURATED_IMAGES: [RegExp, string][] = [
    [/aloo parantha/i,   'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Aloo_Paratha_North_Indian.jpg/250px-Aloo_Paratha_North_Indian.jpg'],
    [/gob(h)?i parantha/i,'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Picture_of_tasty_Gobi_paratha.JPG/250px-Picture_of_tasty_Gobi_paratha.JPG'],
    [/mooli parantha/i,  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Mooli_Paratha.jpg/250px-Mooli_Paratha.jpg'],
    [/paneer parantha/i, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Paneer_Cheese_Paratha.jpg/250px-Paneer_Cheese_Paratha.jpg'],
    [/keema parantha/i,  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Keema_Paratha_by_Preeti_Tamilarasan_%28cropped%29.jpg/250px-Keema_Paratha_by_Preeti_Tamilarasan_%28cropped%29.jpg'],
    [/onion parantha/i,  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Onion_Paratha_With_Curd.jpg/250px-Onion_Paratha_With_Curd.jpg'],
    [/mix parantha/i,    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Paratha_Sabji_MA01.jpg/250px-Paratha_Sabji_MA01.jpg'],
    [/plain parantha/i,  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Aaloo_plain_paratha.jpg/250px-Aaloo_plain_paratha.jpg'],
    [/laccha paratha/i,  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lachha-paratha.jpg/250px-Lachha-paratha.jpg'],
  ];

  private readonly IMAGE_KEYWORDS: [RegExp, string][] = [
    [/aloo parantha/i,                'indian,paratha,potato'],
    [/gobhi parantha/i,               'cauliflower,paratha,indian'],
    [/mooli parantha/i,               'radish,paratha,stuffed'],
    [/paneer parantha/i,              'paneer,paratha,cheese'],
    [/keema parantha/i,               'minced,meat,paratha'],
    [/parantha|paratha/i,             'indian,paratha,bread'],
    [/paneer tikka/i,                 'paneer,tikka,tandoor'],
    [/mushroom tikka/i,               'mushroom,tikka,grilled'],
    [/chicken tikka/i,                'chicken,tikka,tandoor'],
    [/chicken malai tikka/i,          'chicken,malai,tikka'],
    [/tandoori chicken/i,             'tandoori,chicken,clay'],
    [/seekh kebab|lamb seekh/i,       'seekh,kebab,skewer'],
    [/galouti/i,                      'kebab,melt,lucknow'],
    [/hara bhara/i,                   'spinach,kebab,green'],
    [/dahi ke kebab/i,                'yogurt,kebab,starter'],
    [/chicken lollipop/i,             'chicken,lollipop,fried'],
    [/fish amritsari/i,               'fish,amritsari,fried'],
    [/fish finger/i,                  'fish,finger,fried'],
    [/tomato cream soup/i,            'tomato,cream,soup'],
    [/sweet corn soup/i,              'sweet,corn,soup'],
    [/hot & sour/i,                   'hot,sour,soup'],
    [/chicken sweet corn/i,           'chicken,corn,soup'],
    [/chicken clear/i,                'chicken,broth,soup'],
    [/tamatar.*shorba/i,              'tomato,coriander,soup'],
    [/dal shorba/i,                   'lentil,soup,indian'],
    [/murgh shorba/i,                 'chicken,soup,spiced'],
    [/mulligatawny/i,                 'mulligatawny,soup'],
    [/shorba/i,                       'indian,soup,spiced'],
    [/butter paneer|paneer butter/i,  'paneer,butter,masala'],
    [/paneer lababdar/i,              'paneer,tomato,curry'],
    [/palak paneer/i,                 'palak,paneer,spinach'],
    [/shahi korma/i,                  'korma,white,curry'],
    [/paneer achari/i,                'paneer,tikka,curry'],
    [/dal makhani/i,                  'dal,makhani,lentil'],
    [/dal bukhara/i,                  'dal,makhani,creamy'],
    [/dal tadka/i,                    'dal,tadka,lentil'],
    [/sarson ka saag/i,               'saag,mustard,greens'],
    [/aloo gobhi/i,                   'potato,cauliflower,curry'],
    [/mix veg/i,                      'vegetable,curry,indian'],
    [/chole/i,                        'chickpea,chole,masala'],
    [/veg tehri/i,                    'vegetable,rice,turmeric'],
    [/butter chicken/i,               'butter,chicken,masala'],
    [/chicken kadhai/i,               'chicken,kadhai,curry'],
    [/chicken chettinad/i,            'chicken,chettinad,spicy'],
    [/mutton nihari/i,                'nihari,mutton,stew'],
    [/rogan josh|lamb rogan/i,        'rogan,josh,lamb'],
    [/mutton curry/i,                 'mutton,curry,indian'],
    [/fish curry/i,                   'fish,curry,coconut'],
    [/fish moilee/i,                  'fish,coconut,curry'],
    [/prawn masala/i,                 'prawn,masala,curry'],
    [/egg curry/i,                    'egg,curry,gravy'],
    [/garlic naan/i,                  'garlic,naan,bread'],
    [/butter naan/i,                  'butter,naan,indian'],
    [/laccha paratha/i,               'laccha,paratha,layered'],
    [/roomali roti/i,                 'roomali,roti,flatbread'],
    [/sheermal/i,                     'saffron,bread,indian'],
    [/stuffed kulcha/i,               'kulcha,stuffed,bread'],
    [/kulcha/i,                       'kulcha,amritsari,bread'],
    [/peshwari naan/i,                'sweet,naan,stuffed'],
    [/tandoori roti/i,                'tandoori,roti,charred'],
    [/naan/i,                         'naan,indian,bread'],
    [/roti/i,                         'roti,flatbread,indian'],
    [/chicken dum biryani/i,          'chicken,dum,biryani'],
    [/chicken biryani/i,              'chicken,biryani,basmati'],
    [/mutton biryani|dum gosht/i,     'mutton,biryani,dum'],
    [/veg biryani/i,                  'vegetable,biryani,rice'],
    [/jeera rice/i,                   'jeera,rice,cumin'],
    [/veg pulao/i,                    'vegetable,pulao,rice'],
    [/steamed rice|steamed basmati/i, 'basmati,rice,white'],
    [/biryani/i,                      'biryani,rice,indian'],
    [/mango lassi/i,                  'mango,lassi,drink'],
    [/kesar lassi/i,                  'saffron,lassi,drink'],
    [/sweet lassi/i,                  'lassi,yogurt,sweet'],
    [/namkeen lassi/i,                'lassi,buttermilk,salty'],
    [/masala chaas/i,                 'buttermilk,masala,drink'],
    [/fresh lime/i,                   'lime,soda,drink'],
    [/rose sharbat|rose sherbet/i,    'rose,sherbet,pink'],
    [/virgin mojito/i,                'mojito,mint,mocktail'],
    [/cold coffee/i,                  'cold,coffee,iced'],
    [/soft drink/i,                   'soda,cola,drink'],
    [/mineral water/i,                'water,bottle,mineral'],
    [/gulab jamun/i,                  'gulab,jamun,sweet'],
    [/rasgulla/i,                     'rasgulla,sweet,bengali'],
    [/gajar halwa/i,                  'carrot,halwa,pudding'],
    [/kulfi falooda/i,                'kulfi,falooda,dessert'],
    [/kulfi/i,                        'kulfi,icecream,indian'],
    [/phirni/i,                       'phirni,rice,pudding'],
    [/kheer/i,                        'kheer,rice,pudding'],
    [/jalebi/i,                       'jalebi,sweet,crispy'],
    [/shahi tukda/i,                  'shahi,tukda,dessert'],
    [/rasmalai/i,                     'rasmalai,cream,saffron'],
    [/ice cream/i,                    'icecream,scoop,dessert'],
  ];

  private nameHash(s: string): number {
    let h = 0;
    for (const c of s) h = (Math.imul(31, h) + c.charCodeAt(0)) | 0;
    return (Math.abs(h) % 9000) + 1;
  }

  itemImageUrl(name: string): string {
    const local = this.localImageFor(name);
    if (local) return local;
    for (const [pattern, url] of this.CURATED_IMAGES) {
      if (pattern.test(name)) {
        return url;
      }
    }
    for (const [pattern, keywords] of this.IMAGE_KEYWORDS) {
      if (pattern.test(name)) {
        return `https://loremflickr.com/120/120/${keywords}?lock=${this.nameHash(name)}`;
      }
    }
    return `https://loremflickr.com/120/120/indian,food,curry?lock=${this.nameHash(name)}`;
  }

  onImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    img.closest('.item-img-wrap')?.classList.add('img-error');
  }

  goToAdmin(): void {
    if (this.auth.isLoggedIn && this.auth.restaurantId === this.restaurant?.id) {
      this.router.navigate(['/admin/dashboard'], { queryParams: { restaurantId: this.restaurant?.id } });
    } else {
      this.router.navigate(['/admin/login'], { queryParams: { restaurantId: this.restaurant?.id } });
    }
  }
}
