import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepairProcessService {

  private device: string;
  private brand: string;
  private model: string;
  private repair: string[];
  private package: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.fillAll();
  }

  public setDevice(device: string): void {
    this.device = device;
  }
  public setBrand(brand: string): void {
    this.brand = brand;
  }
  public setModel(model: string): void {
    this.model = model;
  }
  public setRepair(repair: string[]): void {
    this.repair = repair;
  }
  public setPackage(_package: string): void {
    this.package = _package;
  }

  public getDevice(): string {
    return this.device;
  }
  public getBrand(): string {
    return this.brand;
  }
  public getModel(): string {
    return this.model;
  }
  public getRepair(): string[] {
    return this.repair;
  }
  public getPackage(): string {
    return this.package;
  }

  private fillAll() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      let r = this.route;
      while (r.firstChild) {
        r = r.firstChild
      }
      r.params.pipe(first()).subscribe(params => {
        this.setDevice(params['device']);
        this.setBrand(params['brand']);
        this.setModel(params['model']);
        this.setRepair(params['repair']);
        this.setPackage(params['package']);

      });
    });

    console.log(this);
  }
}
