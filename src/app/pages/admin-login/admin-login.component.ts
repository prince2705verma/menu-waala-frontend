import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';
import { THEME_PRESETS } from '../../restaurants.data';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent implements OnInit {
  username = '';
  password = '';
  showPassword = false;
  error = '';
  loading = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private themeService: ThemeService,
  ) {}

  ngOnInit(): void {
    this.themeService.apply(THEME_PRESETS['Obsidian Gold']);
    if (this.auth.isLoggedIn) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  submit(): void {
    this.error = '';
    if (!this.username || !this.password) { this.error = 'Please fill in all fields.'; return; }
    this.loading = true;
    setTimeout(() => {
      const ok = this.auth.login(this.username, this.password);
      this.loading = false;
      if (ok) {
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.error = 'Invalid username or password.';
      }
    }, 400);
  }
}
