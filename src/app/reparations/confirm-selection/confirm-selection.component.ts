import { Component, OnInit } from '@angular/core';
import { RepairProcessService } from 'src/app/repair-process/repair-process.service';
import { ActivatedRoute } from '@angular/router';
import { RestfulService } from 'src/app/helpers/restful/restful.service';

@Component({
  selector: 'app-confirm-selection',
  templateUrl: './confirm-selection.component.html',
  styleUrls: ['./confirm-selection.component.css']
})
export class ConfirmSelectionComponent implements OnInit {

  constructor(
    private repairProcess: RepairProcessService,
    private route: ActivatedRoute,
    private restful: RestfulService
  ) { }

  ngOnInit() {
    this.restful.GetWithoutToken("todos/1").subscribe((data) => {
      console.log(data);
    })
  }

}
