import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-quan-ly-thiet-bi',
  templateUrl: './quan-ly-thiet-bi.component.html',
  styleUrls: ['./quan-ly-thiet-bi.component.less']
})
export class QuanLyThietBiComponent {
  value : string
  listOfData = [
    {
      id: 1,
      tenThietBi: '1',
      maThietBi: 'John Brown',
      soLuong: 32,
      ngayNhapVe: new Date(),
      ngayBaoHanh: new Date(),
      xuatXu: 'abc',
      tinhTrang: 'moi'
    },
    {
      id: 2,
      tenThietBi: '2',
      maThietBi: 'Alice Smith',
      soLuong: 45,
      ngayNhapVe: new Date(),
      ngayBaoHanh: new Date(),
      xuatXu: 'def',
      tinhTrang: 'tot'
    },
    {
      id: 3,
      tenThietBi: '3',
      maThietBi: 'Bob Johnson',
      soLuong: 28,
      ngayNhapVe: new Date(),
      ngayBaoHanh: new Date(),
      xuatXu: 'ghi',
      tinhTrang: 'cu'
    },
    {
      id: 4,
      tenThietBi: '4',
      maThietBi: 'Carol White',
      soLuong: 37,
      ngayNhapVe: new Date(),
      ngayBaoHanh: new Date(),
      xuatXu: 'jkl',
      tinhTrang: 'moi'
    },
    {
      id: 5,
      tenThietBi: '5',
      maThietBi: 'David Green',
      soLuong: 50,
      ngayNhapVe: new Date(),
      ngayBaoHanh: new Date(),
      xuatXu: 'mno',
      tinhTrang: 'tot'
    },
    {
      id: 6,
      tenThietBi: '6',
      maThietBi: 'Eva Black',
      soLuong: 23,
      ngayNhapVe: new Date(),
      ngayBaoHanh: new Date(),
      xuatXu: 'pqr',
      tinhTrang: 'cu'
    },
    {
      id: 7,
      tenThietBi: '7',
      maThietBi: 'Frank Blue',
      soLuong: 39,
      ngayNhapVe: new Date(),
      ngayBaoHanh: new Date(),
      xuatXu: 'stu',
      tinhTrang: 'moi'
    }
  ];
  tenThietBi: any;
  maThietBi: string;
  soLuong: number;
  ngayNhapVe: Date;
  ngayBaoHanh: Date;
  xuatXu: string;
  tinhTrang: string;

  constructor(private modal: NzModalService) {}

  showDeleteConfirm(data :any): void {
    this.modal.confirm({
      nzTitle: 'Có muốn xóa thông tin này không?',
      nzContent: '',
      nzOkText: 'Có',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        console.log(data);
        this.listOfData = this.listOfData.filter((item) => item.id != data.id)
      },
      nzCancelText: 'Không',
      nzOnCancel: () => console.log('Cancel')
    });
  }


  themMoi() {
    // 1 object cos thong tin -> add mang
    // ham them manbg push
    const input = {
      id: this.listOfData.length+1,
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
