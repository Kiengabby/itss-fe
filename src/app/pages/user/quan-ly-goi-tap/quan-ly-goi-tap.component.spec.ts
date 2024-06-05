import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyGoiTapComponent } from './quan-ly-goi-tap.component';

describe('QuanLyGoiTapComponent', () => {
  let component: QuanLyGoiTapComponent;
  let fixture: ComponentFixture<QuanLyGoiTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLyGoiTapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuanLyGoiTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
