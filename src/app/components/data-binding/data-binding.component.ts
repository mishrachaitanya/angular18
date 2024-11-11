import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // string number, boolean, date
  courseName: string = "Angular 18";
  inputType = "radio";
  rollNo: number = 1243;
  isboolean: boolean= true;
  currentDate: Date = new Date();
  myClassName = "bg-primary";
  stateName: string ="Goa";
  isIndian:boolean=true;

  firstName= signal("Chaitanya Mishra");

  constructor (){
    // this.courseName = "";
    // this.inputType="" ;
    // this.rollNo=0;
  }

  showAlert(message: string){
    alert(message);
  }
  changeCourseName(){
    this.courseName = "ReactJs";
    this.firstName.set("RRR");
  }

}
