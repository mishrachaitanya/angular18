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
  