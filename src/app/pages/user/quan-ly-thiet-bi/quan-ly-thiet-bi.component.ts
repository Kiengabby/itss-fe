import { Component } from '@angular/core';

@Component({
  selector: 'app-quan-ly-thiet-bi',
  templateUrl: './quan-ly-thiet-bi.component.html',
  styleUrls: ['./quan-ly-thiet-bi.component.less']
})
export class QuanLyThietBiComponent {
  value : string
  listOfData: any[] = [
    {
      tenThietBi: '1',
      maThietBi: 'John Brown',
      soLuong: 32,
      ngayNhapVe: new Date(),
      ngayBaoHanh: new Date(),
      xuatXu: 'abc',
      tinhTrang: 'moi'
    },
  ];
  tenThietBi: any;
  maThietBi: string;
  soLuong: number;
  ngayNhapVe: Date;
  ngayBaoHanh: Date;
  xuatXu: string;
  tinhTrang: string;

  themMoi() {
    // 1 object cos thong tin -> add mang
    // ham them manbg push
    const input = {
      tenThietBi: this.tenThietBi,
      maThietBi: this.maThietBi,
      soLuong: this.soLuong,
      ngayNhapVe: this.ngayNhapVe,
      ngayBaoHanh: this.ngayBaoHanh,
      xuatXu: this.xuatXu,
      tinhTrang: this.tinhTrang,
    }
    this.listOfData.push(input);
    console.log(this.listOfData);
  }
}
