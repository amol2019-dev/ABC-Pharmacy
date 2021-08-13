import { Component, OnInit } from '@angular/core';
import { MedicinesService } from '../services/medicines.service';
import { IMedicines } from '../models/medicines';

@Component({
  selector: 'app-list-medicines',
  templateUrl: './list-medicines.component.html',
  styleUrls: ['./list-medicines.component.css']
})
export class ListMedicinesComponent implements OnInit {

  orgMedicinesList: IMedicines[];
  medicinesList: IMedicines[] = [];
  constructor(private medicinesService: MedicinesService) { }

  ngOnInit() {

    this.medicinesService.GetAllMedicines().subscribe(result => {
      console.log('response is', result);
      this.medicinesList = result;
      this.orgMedicinesList = result;
    },
      error => {
        console.log(error);
        alert('Something went wrong');
      });
  }

  getThirtyDaysBackDate(expiryDate: Date) {
    var timeDiff = new Date(expiryDate).getTime() - new Date().getTime();
    return timeDiff / (1000 * 3600 * 24);
  }

  search(input: string) {
    this.medicinesList = this.orgMedicinesList.filter(x => x.fullName.toLowerCase().indexOf(input.toLowerCase()) > -1);
  }
}
