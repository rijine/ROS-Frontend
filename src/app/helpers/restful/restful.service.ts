import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, take, map } from 'rxjs/operators';

export class Product {
  idpage: string;
  merkid: string;
  modelid: string;
  titel: string;
  seoTextTitel: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestfulService {
  constructor(private httpClient: HttpClient) {}

  private API_URL: string = 'https://jsonplaceholder.typicode.com/';

  GetWithoutToken(endpoint) {
    return this.httpClient.get(`${this.API_URL}${endpoint}`);
  }

  findProduct(productFromUrl: string) {
    return this.getProducts().pipe(
      map((products: Product[]) => {
        return products.filter(
          product =>
            product.seoTextTitel
              .toLowerCase()
              .split(' ')
              .join('-') === productFromUrl
        );
      }),
      take(1),
      map(product => !!product)
    );
  }

  getProducts() {
    return this.httpClient.get('http://ros.azurewebsites.net/api/pagina/all');
  }
}
