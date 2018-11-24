import { Component, OnInit } from '@angular/core';
import { RepairProcessService } from 'src/app/repair-process/repair-process.service';

@Component({
  selector: 'app-brand-selection',
  templateUrl: './brand-selection.component.html',
  styleUrls: ['./brand-selection.component.css']
})
export class BrandSelectionComponent implements OnInit {

  constructor(
    private repairProcess: RepairProcessService
  ) { }

  ngOnInit() {
    this.repairProcess.setBrand("apple");
  }

}
