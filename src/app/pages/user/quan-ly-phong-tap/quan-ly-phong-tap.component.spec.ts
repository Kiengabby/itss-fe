import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyPhongTapComponent } from './quan-ly-phong-tap.component';

describe('QuanLyPhongTapComponent', () => {
  let component: QuanLyPhongTapComponent;
  let fixture: ComponentFixture<QuanLyPhongTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLyPhongTapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuanLyPhongTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
