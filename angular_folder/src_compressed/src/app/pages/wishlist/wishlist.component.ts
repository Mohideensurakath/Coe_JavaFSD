import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist: any[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeFromWishlist(productId: number) {
    this.wishlistService.removeFromWishlist(productId);
    this.wishlist = this.wishlistService.getWishlist();
  }
}
