import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RestfulService } from '../helpers/restful/restful.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductsGuards implements CanActivate {
  constructor(private restfulService: RestfulService) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.restfulService.findProduct(route.params.id).pipe(
      map(isFound => {
        if (isFound) {
          return true;
        } else {
          // router.navigate('')
          // Navigate to 404.
          // Make sure that dont use /404 otherwise it will go in cycle
          // or change product route to some other route.
          // like http://localhost:4200/iphone-xs-max-reparatie
          // to http://localhost:4200/products/iphone-xs-max-reparatie

        }
      })
    );
  }
}
