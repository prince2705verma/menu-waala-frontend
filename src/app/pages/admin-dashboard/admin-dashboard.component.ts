import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Restaurant, ThemeConfig, THEME_PRESETS } from '../../restaurants.data';
import { MenuItem, MenuSection } from '../../menu.data';
import { AuthService } from '../../services/auth.service';
import { RestaurantService } from '../../services/restaurant.service';
import { ThemeService } from '../../services/theme.service';
import QRCode from 'qrcode';

interface ItemDraft {
  name: string;
  half: number | null;
  full: number | null;
  isVeg: boolean;
  popular: boolean;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit {
  restaurant!: Restaurant;
  activeTab: 'info' | 'menu' | 'theme' | 'qr' = 'info';
  savedMsg = '';
  qrDataUrl = '';
  menuUrl = '';

  // ── Info tab
  infoForm = { name: '', tagline: '', logo: '', discount: 0 };

  // ── Theme tab
  themeForm!: ThemeConfig;
  presetNames = Object.keys(THEME_PRESETS);

  // ── Menu tab
  expandedSections = new Set<number>([0]);
  editTarget: { sectionIdx: number; itemIdx: number | null } | null = null;
  itemDraft: ItemDraft = this.emptyDraft();
  addingSection = false;
  newSectionName = '';
  newSectionIcon = '🍽️';
  editingSectionIdx: number | null = null;
  sectionNameDraft = '';

  constructor(
    private auth: AuthService,
    private restaurantService: RestaurantService,
    private themeService: ThemeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.auth.restaurantId;
    if (!id) { this.router.navigate(['/admin/login']); return; }
    const data = this.restaurantService.getRestaurant(id);
    if (!data) { this.router.navigate(['/admin/login']); return; }
    this.restaurant = JSON.parse(JSON.stringify(data));
    this.syncInfoForm();
    this.themeForm = { ...this.restaurant.theme };
    this.themeService.apply(this.restaurant.theme);
  }

  private syncInfoForm(): void {
    this.infoForm = {
      name: this.restaurant.name,
      tagline: this.restaurant.tagline,
      logo: this.restaurant.logo,
      discount: this.restaurant.discount ?? 0,
    };
  }

  private emptyDraft(): ItemDraft {
    return { name: '', half: null, full: null, isVeg: true, popular: false };
  }

  private showSaved(msg = 'Saved!'): void {
    this.savedMsg = msg;
    setTimeout(() => (this.savedMsg = ''), 2500);
  }

  // ─── Info tab ──────────────────────────────────────────────
  saveInfo(): void {
    if (!this.infoForm.name.trim()) return;
    this.restaurant.name    = this.infoForm.name.trim();
    this.restaurant.tagline = this.infoForm.tagline.trim();
    this.restaurant.logo    = this.infoForm.logo.trim() || '🍽️';
    const pct = Number(this.infoForm.discount);
    this.restaurant.discount = (!isNaN(pct) && pct > 0 && pct <= 100) ? pct : 0;
    this.restaurantService.saveRestaurant(this.restaurant);
    this.showSaved('Restaurant info saved!');
  }

  // ─── Theme tab ─────────────────────────────────────────────
  applyPreset(name: string): void {
    this.themeForm = { ...THEME_PRESETS[name] };
    this.themeService.apply(this.themeForm);
  }

  onThemeChange(): void {
    this.themeService.apply(this.themeForm);
  }

  saveTheme(): void {
    this.restaurant.theme = { ...this.themeForm };
    this.restaurantService.saveRestaurant(this.restaurant);
    this.showSaved('Theme saved!');
  }

  // ─── Menu tab – section controls ───────────────────────────
  toggleSection(idx: number): void {
    this.expandedSections.has(idx) ? this.expandedSections.delete(idx) : this.expandedSections.add(idx);
  }

  startEditSectionName(idx: number): void {
    this.editingSectionIdx = idx;
    this.sectionNameDraft = this.restaurant.sections[idx].name;
  }

  saveSectionName(idx: number): void {
    if (this.sectionNameDraft.trim()) {
      this.restaurant.sections[idx].name = this.sectionNameDraft.trim();
    }
    this.editingSectionIdx = null;
  }

  deleteSection(idx: number): void {
    if (!confirm(`Delete section "${this.restaurant.sections[idx].name}" and all its items?`)) return;
    this.restaurant.sections.splice(idx, 1);
    this.editTarget = null;
  }

  addSection(): void {
    if (!this.newSectionName.trim()) return;
    this.restaurant.sections.push({
      name: this.newSectionName.trim().toUpperCase(),
      icon: this.newSectionIcon || '🍽️',
      items: [],
    });
    this.expandedSections.add(this.restaurant.sections.length - 1);
    this.newSectionName = '';
    this.newSectionIcon = '🍽️';
    this.addingSection = false;
  }

  saveMenu(): void {
    this.editTarget = null;
    this.restaurantService.saveRestaurant(this.restaurant);
    this.showSaved('Menu saved!');
  }

  // ─── Menu tab – item controls ───────────────────────────────
  startAddItem(sectionIdx: number): void {
    this.editTarget = { sectionIdx, itemIdx: null };
    this.itemDraft = this.emptyDraft();
  }

  startEditItem(sectionIdx: number, itemIdx: number): void {
    const item = this.restaurant.sections[sectionIdx].items[itemIdx];
    this.editTarget = { sectionIdx, itemIdx };
    this.itemDraft = {
      name: item.name,
      half: item.half ?? null,
      full: item.full,
      isVeg: item.isVeg ?? true,
      popular: item.popular ?? false,
    };
  }

  cancelEdit(): void { this.editTarget = null; }

  commitItem(): void {
    if (!this.editTarget) return;
    const { sectionIdx, itemIdx } = this.editTarget;
    if (!this.itemDraft.name.trim() || this.itemDraft.full === null) return;

    const item: MenuItem = {
      name: this.itemDraft.name.trim(),
      full: this.itemDraft.full,
      ...(this.itemDraft.half ? { half: this.itemDraft.half } : {}),
      isVeg: this.itemDraft.isVeg,
      ...(this.itemDraft.popular ? { popular: true } : {}),
    };

    const items = this.restaurant.sections[sectionIdx].items;
    if (itemIdx === null) {
      items.push(item);
    } else {
      items[itemIdx] = item;
    }
    this.editTarget = null;
  }

  deleteItem(sectionIdx: number, itemIdx: number): void {
    this.restaurant.sections[sectionIdx].items.splice(itemIdx, 1);
    if (this.editTarget?.sectionIdx === sectionIdx && this.editTarget.itemIdx === itemIdx) {
      this.editTarget = null;
    }
  }

  isEditing(sectionIdx: number, itemIdx: number): boolean {
    return this.editTarget?.sectionIdx === sectionIdx && this.editTarget?.itemIdx === itemIdx;
  }

  isAddingTo(sectionIdx: number): boolean {
    return this.editTarget?.sectionIdx === sectionIdx && this.editTarget?.itemIdx === null;
  }

  // ─── QR Code tab ────────────────────────────────────────────
  async openQrTab(): Promise<void> {
    this.activeTab = 'qr';
    const base = document.querySelector('base')?.getAttribute('href') ?? '/';
    const baseUrl = base.startsWith('http') ? base : window.location.origin + base;
    this.menuUrl = baseUrl + 'menu?restaurantId=' + this.restaurant.id;
    this.qrDataUrl = await QRCode.toDataURL(this.menuUrl, {
      width: 300,
      margin: 2,
      color: { dark: '#000000', light: '#ffffff' },
    });
  }

  downloadQr(): void {
    const a = document.createElement('a');
    a.href = this.qrDataUrl;
    a.download = this.restaurant.name.replace(/\s+/g, '-') + '-menu-qr.png';
    a.click();
  }

  printQr(): void {
    const win = window.open('', '_blank');
    if (!win) return;
    const name = this.escapeHtml(this.restaurant.name);
    const logo = this.escapeHtml(this.restaurant.logo);
    const url  = this.escapeHtml(this.menuUrl);
    win.document.write(`<!DOCTYPE html><html><head>
      <title>${name} - Menu QR Code</title>
      <style>
        body{font-family:sans-serif;text-align:center;padding:48px;color:#111}
        h1{margin:0 0 0.15rem}
        p{color:#666;margin:0 0 2rem;font-size:0.95rem}
        img{width:280px;height:280px;display:block;margin:0 auto}
        .url{font-size:0.7rem;color:#aaa;margin-top:1.25rem;word-break:break-all}
      </style>
    </head><body>
      <h1>${logo} ${name}</h1>
      <p>Scan to view our menu</p>
      <img src="${this.qrDataUrl}" alt="Menu QR Code"/>
      <div class="url">${url}</div>
      <script>window.onload=()=>window.print();<\/script>
    </body></html>`);
    win.document.close();
  }

  private escapeHtml(s: string): string {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  isImageUrl(val: string): boolean {
    return /^https?:\/\//i.test(val);
  }

  // ─── Navigation ─────────────────────────────────────────────
  previewMenu(): void {
    this.router.navigate(['/menu'], { queryParams: { restaurantId: this.restaurant.id } });
  }

  logout(): void {
    this.auth.logout();
    this.themeService.apply(THEME_PRESETS['Black Diamond']);
    this.router.navigate(['/admin/login']);
  }
}
