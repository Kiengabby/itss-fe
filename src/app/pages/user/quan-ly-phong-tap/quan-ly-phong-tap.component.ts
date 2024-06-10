import { Component } from '@angular/core';

@Component({
  selector: 'app-quan-ly-phong-tap',
  templateUrl: './quan-ly-phong-tap.component.html',
  styleUrls: ['./quan-ly-phong-tap.component.less']
})
export class QuanLyPhongTapComponent {
  listOfData: any[] = [
    {
      roomId: '1',
      roomName: 'Gym',
      quantity: '2',
      description: 'Còn ',
      
    },
    {
      roomId: '2',
      roomName: 'Boxing',
      quantity: '3',
      description: 'Đầy ',
      
    },
    {
      roomId: '3',
      roomName: 'yoga',
      quantity: '2',
      description: 'Còn ',
      
    },
    {
      roomId: '4',
      roomName: 'Dance',
      quantity: '1',
      description: 'Còn ',
      
    },
  ];

}
