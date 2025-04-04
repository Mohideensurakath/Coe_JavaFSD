import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
