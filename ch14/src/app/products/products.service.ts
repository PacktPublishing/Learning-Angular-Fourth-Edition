import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Product } from './product';

interface ProductDTO {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductDTO[]>(this.productsUrl).pipe(
      map(products => products.map(product => {
        return this.convertToProduct(product);
      })),
      retry(2),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<ProductDTO>(`${this.productsUrl}/${id}`).pipe(
      map(product => this.convertToProduct(product))
    )
  }

  addProduct(name: string, price: number): Observable<Product> {
    return this.http.post<ProductDTO>(this.productsUrl, {
      title: name,
      price: price
    }).pipe(
      map(product => this.convertToProduct(product))
    );
  }

  updateProduct(id: number, price: number): Observable<void> {
    return this.http.patch<void>(`${this.productsUrl}/${id}`, { price });
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.productsUrl}/${id}`);
  }

  private convertToProduct(product: ProductDTO): Product {
    return {
      id: product.id,
      name: product.title,
      price: product.price
    };
  }

  private handleError(error: HttpErrorResponse) {
    switch(error.status) {
      case 0:
        console.error('Client error:', error.error);
        break;
      case HttpStatusCode.InternalServerError:
        console.error('Server error:', error.error);
        break;
      case HttpStatusCode.BadRequest:
        console.error('Request error:', error.error);
        break;
      default:
        console.error('Uknown error:', error.error);
    }
    return throwError(() => error);
  }

}
