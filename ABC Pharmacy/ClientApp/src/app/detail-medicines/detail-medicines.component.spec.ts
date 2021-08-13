import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMedicinesComponent } from './detail-medicines.component';

describe('DetailMedicinesComponent', () => {
  let component: DetailMedicinesComponent;
  let fixture: ComponentFixture<DetailMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
