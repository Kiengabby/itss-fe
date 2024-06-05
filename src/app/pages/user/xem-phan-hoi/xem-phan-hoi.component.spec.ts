import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemPhanHoiComponent } from './xem-phan-hoi.component';

describe('XemPhanHoiComponent', () => {
  let component: XemPhanHoiComponent;
  let fixture: ComponentFixture<XemPhanHoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemPhanHoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XemPhanHoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
