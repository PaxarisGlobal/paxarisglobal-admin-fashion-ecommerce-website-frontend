import { Component } from '@angular/core';
import { CartService } from './core/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly title = 'Fashion Ecommerce Website';
  readonly promo = 'Color Rush Sale | Futuristic fashion edits live now | Free shipping over $49';
  readonly topCategories = ['Men', 'Women', 'Kids', 'Beauty', 'Footwear', 'Deals'];
  readonly megaMenu: Record<string, string[]> = {
    Men: ['T-Shirts', 'Shirts', 'Jeans', 'Footwear', 'Watches', 'Sportswear'],
    Women: ['Dresses', 'Tops', 'Kurtas', 'Heels', 'Handbags', 'Jewellery'],
    Kids: ['Boys Clothing', 'Girls Clothing', 'Infantwear', 'Toys', 'School'],
    Beauty: ['Makeup', 'Skincare', 'Haircare', 'Fragrances', 'Grooming'],
    Footwear: ['Sneakers', 'Heels', 'Boots', 'Slides', 'Running'],
    Deals: ['Flash Sale', 'Clearance', 'New Offers', 'Bundle Deals'],
  };
  activeMegaMenu: string | null = null;
  cartCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.items$.subscribe(items => {
      this.cartCount = items.reduce((total, item) => total + item.quantity, 0);
    });
  }

  openMegaMenu(category: string): void {
    this.activeMegaMenu = category;
  }

  closeMegaMenu(): void {
    this.activeMegaMenu = null;
  }
}
