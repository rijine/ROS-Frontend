import { Component, OnInit } from '@angular/core';
import { RepairProcessService } from 'src/app/repair-process/repair-process.service';

@Component({
  selector: 'app-model-selection',
  templateUrl: './model-selection.component.html',
  styleUrls: ['./model-selection.component.css']
})
export class ModelSelectionComponent implements OnInit {

  constructor(
    private repairProcess: RepairProcessService
  ) { }

  ngOnInit() {
    this.repairProcess.setModel("iphone-7");
  }

}
