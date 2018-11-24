import { Component, OnInit } from '@angular/core';
import { RepairProcessService } from '../repair-process/repair-process.service';

@Component({
  selector: 'app-reparation-main',
  templateUrl: './reparation-main.component.html',
  styleUrls: ['./reparation-main.component.css']
})
export class ReparationMainComponent implements OnInit {

  constructor(
    private repairProcess: RepairProcessService
  ) { }

  ngOnInit() {
    this.repairProcess.setDevice("smartphone");
  }

}
