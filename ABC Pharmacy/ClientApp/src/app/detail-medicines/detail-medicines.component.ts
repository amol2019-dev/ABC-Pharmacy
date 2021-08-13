import { Component, OnInit, ViewChild } from '@angular/core';
import { MedicinesService } from '../services/medicines.service';
import { Medicines } from '../models/medicines';
import { Router, ActivatedRoute } from '@angular/router';
import {filter} from 'rxjs/operators'
@Component({
  selector: 'app-detail-medicines',
  templateUrl: './detail-medicines.component.html',
  styleUrls: ['./detail-medicines.component.css']
})
export class DetailMedicinesComponent implements OnInit {

  medicinesDetail: Medicines;
  notes: string;
  medicineId: number;
  constructor(private medicinesService: MedicinesService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {

    this.medicineId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log('Medicine Id:', this.route.snapshot.paramMap, this.medicineId);
    this.medicinesService.GetMedicineById(this.medicineId).subscribe(result => {
      console.log('response is', result);
      this.medicinesDetail = result;
      this.notes = this.medicinesDetail.notes;
    },
      error => {
        console.log(error);
      });
  }

  updateNotes() {
    this.medicinesDetail.notes = this.notes;
    this.medicinesService.UpdateNotes(this.medicinesDetail).subscribe(
      res => {
        console.log(res);
        if (res === true) {
          alert('Notes Updated');
          this.router.navigate(['list']);
        }
      },
      err => {
        console.log(err);
      }
    );
    this.closeModal();
  }

  openModal() {
    this.notes = this.medicinesDetail.notes;
}
  closeModal() {
    let element: HTMLElement = document.getElementsByClassName('btnClose')[0] as HTMLElement;
    element.click();
}


}
