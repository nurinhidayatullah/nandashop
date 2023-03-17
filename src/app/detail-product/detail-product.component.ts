import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  faWhatsapp = faWhatsapp;
  images = [
    {
      imgSrc: 'https://cf.shopee.co.id/file/2614d84670770656b095ec3a48b5ee4e',
      imgAlt: 'slider1',
    },
    {
      imgSrc: 'https://cf.shopee.co.id/file/a47eeb538bb276cceebd3591ec57f90c',
      imgAlt: 'slider1',
    },
    {
      imgSrc: 'https://cf.shopee.co.id/file/f82b18da61ff8db1dac1c8475936dbed',
      imgAlt: 'slider1',
    },
    {
      imgSrc: 'https://cf.shopee.co.id/file/1fb3627de126cc1cdb69fa559d56df33',
      imgAlt: 'slider1',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  redirectWa(): void {
    window.open("https://wa.me/+62082137176655?text=HalloNanda")
  }
}
