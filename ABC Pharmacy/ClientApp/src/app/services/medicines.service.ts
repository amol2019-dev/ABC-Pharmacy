import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IMedicines, Medicines } from '../models/medicines';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {
  url: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
  }

  public GetAllMedicines(): Observable<IMedicines[]> {
    return this.http.get<IMedicines[]>(this.url + 'api/Medicines/GetAllMedicines');
  }

  public GetMedicineById(medicineId:number): Observable<IMedicines> {
    return this.http.get<IMedicines>(this.url + 'api/Medicines/GetMedicineById?medicineId='+medicineId);
  }

  public AddMedicines(medicine: Medicines): any {
    return this.http.post<any>(this.url + 'api/Medicines/AddMedicine', medicine);
  }

  public UpdateMedicines(medicine: IMedicines): Observable<IMedicines> {
    return this.http.get<IMedicines>(this.url + 'api/Medicines/UpdateMedicine');
  }

  public UpdateNotes(medicine: IMedicines): any {
    return this.http.post<IMedicines>(this.url + 'api/Medicines/UpdateNotes', medicine);
  }
}
