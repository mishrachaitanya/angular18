import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {

  studentObj: any= {
    firstName:'', lastName:'', userName:'', city:'',state:'', zip:'',isAcceptTerms:false
  };

  formValue: any;

  onSubmit(){
    debugger;
    this.formValue=this.studentObj;
  }
  clickResetForm(){
    this.studentObj = {
      firstName:'', lastName:'', userName:'', city:'',state:'', zip:'',isAcceptTerms:false
    };
  }
}
