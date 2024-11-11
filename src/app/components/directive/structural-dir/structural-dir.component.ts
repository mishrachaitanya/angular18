import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
  isDiv1Visible: boolean= true;
  isDiv2Visible: boolean= false;
  num1 :string ="";
  num2: string="";
  isActive: boolean=false;
  selectedState: string='';
  cityArray: string[]=['Pune','Mumbai','Nagpur','LKO'];

  studentList: any[] = [
    {studId:12, totalMarks:23, gender:'male', name:'AAA', city: 'Pune',   isActive:  false},
    {studId:22, totalMarks:33, gender:'female', name:'BBB', city: 'Mumbai', isActive:  false},
    {studId:32, totalMarks:67, gender:'male', name:'CC', city: 'Jalgao', isActive:  true},
    {studId:56, totalMarks:98, gender:'female', name:'DD', city: 'Mumbai', isActive:  false},
    {studId:34, totalMarks:20, gender:'male', name:'EE', city: 'Nagpur', isActive:  false},
    {studId:76, totalMarks:50, gender:'male', name:'FFF', city: 'Thane', isActive:  true},
  ]


  showDiv1(){
    this.isDiv1Visible=true;
  }
  hideDvi1(){
    this.isDiv1Visible= false;
  }
  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible;
    // if(this.isDiv2Visible==true){
    //   this.isDiv2Visible=false;
    // }
    // else{
    //   this.isDiv2Visible=true;
    // }
  }
}
  