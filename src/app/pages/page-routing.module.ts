import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './user/homepage/homepage.component';
import { QuanLyPhongTapComponent } from './user/quan-ly-phong-tap/quan-ly-phong-tap.component';
import { QuanLyThietBiComponent } from './user/quan-ly-thiet-bi/quan-ly-thiet-bi.component';
import { QuanLyGoiTapComponent } from './user/quan-ly-goi-tap/quan-ly-goi-tap.component';
import { QuanLyNguoiDungComponent } from './user/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { XemPhanHoiComponent } from './user/xem-phan-hoi/xem-phan-hoi.component';

const routes: Routes = [
  
  {
    path: 'courses',
    children: [
    ],
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'quan-ly-phong-tap',
    component: QuanLyPhongTapComponent
  },
  {
    path: 'quan-ly-thiet-bi',
    component: QuanLyThietBiComponent
  },
  {
    path: 'quan-ly-goi-tap',
    component: QuanLyGoiTapComponent
  },
  {
    path: 'quan-ly-nguoi-dung',
    component: QuanLyNguoiDungComponent
  },
  {
    path: 'xem-phan-hoi',
    component: XemPhanHoiComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
