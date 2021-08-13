import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MedicinesService } from '../services/medicines.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medicines',
  templateUrl: './add-medicines.component.html',
  styleUrls: ['./add-medicines.component.css']
})
export class AddMedicinesComponent implements OnInit {

  medicineForm: FormGroup;

  constructor(private fb: FormBuilder, private medicinesService: MedicinesService, private router: Router) { }

  ngOnInit() {
    this.medicineForm = this.fb.group({
      fullName: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      expiryDate: ['', Validators.required]
    });
  }

  AddMedicines() {
    if (this.medicineForm.valid) {
      var expiryDays = this.getThirtyDaysBackDate(this.medicineForm.value.expiryDate)
      if (expiryDays <= 15) {
        alert('Medicines with Expiry date less than 15 days should not be allowed to add in the stock');
        return;
      } else if (expiryDays <= 30) {
        alert('Medicines with Expiry date less than 15 days should not be allowed to add in the stock');
      }

      console.log(this.medicineForm.value);
      this.medicinesService.AddMedicines(this.medicineForm.value).subscribe(
        res => {
          console.log(res);
          if (res === true)
            this.router.navigate(['list']);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      alert('Please fill all the fields.');
    }
  }

  getThirtyDaysBackDate(expiryDate: Date) {
    var timeDiff = new Date(expiryDate).getTime() - new Date().getTime();
    return timeDiff / (1000 * 3600 * 24);
  }
}
