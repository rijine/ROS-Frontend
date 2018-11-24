import { Component, OnInit } from '@angular/core';
import { RepairProcessService } from 'src/app/repair-process/repair-process.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-price-selection',
  templateUrl: './price-selection.component.html',
  styleUrls: ['./price-selection.component.css']
})
export class PriceSelectionComponent implements OnInit {

  constructor(
    private repairProcess: RepairProcessService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.repairProcess.setPackage("spoed");
  }

  showRepair() {
    console.log("process", this.repairProcess);
  }

}
