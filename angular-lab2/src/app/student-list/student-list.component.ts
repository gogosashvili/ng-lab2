import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: student[];

  constructor() {
    this.students = [
      {name: "name1", surname: "surname1", privateNumber: "11111"},
      {name: "name2", surname: "surname2", privateNumber: "22222"},
      {name: "name3", surname: "surname3", privateNumber: "33333"},
      {name: "name4", surname: "surname4", privateNumber: "44444"},
      {name: "name5", surname: "surname5", privateNumber: "55555"},
      {name: "name6", surname: "surname6", privateNumber: "66666"},
      {name: "name7", surname: "surname7", privateNumber: "77777"}
    ]
   }

  ngOnInit() {
  }

}

class student{
  name: string;
  surname: string;
  privateNumber: string;
}
