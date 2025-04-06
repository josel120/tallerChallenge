import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 't_challenge';
  clickedItem: boolean = false;
  selectedItemDetails: any = null;
  items: any = [];
  constructor( private productService: ProductService) {}
  ngOnInit(): void {
    this.getProductList();
  } 
  getProductList(){
    this.productService.getProduct().subscribe((data) => {
      this.items = data;
    });
  }
  getSelectedItem(item: any){
    this.productService.getProductById(item.id).subscribe({
      next: (data) => {
        this.selectedItemDetails = data;
      }});
    this.clickedItem = true;
  }
}