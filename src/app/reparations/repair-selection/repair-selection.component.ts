import { Component, OnInit } from '@angular/core';
import { RepairProcessService } from 'src/app/repair-process/repair-process.service';

@Component({
  selector: 'app-repair-selection',
  templateUrl: './repair-selection.component.html',
  styleUrls: ['./repair-selection.component.css']
})
export class RepairSelectionComponent implements OnInit {

  constructor(
    private repairProcess: RepairProcessService
  ) { }

  ngOnInit() {
    this.repairProcess.setRepair(["scherm"]);
  }

}
