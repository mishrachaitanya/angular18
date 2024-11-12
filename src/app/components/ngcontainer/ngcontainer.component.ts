import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.css'
})
export class NgcontainerComponent implements AfterViewInit {
  isContainer: boolean = true;
  @ViewChild('txt') textBox?: ElementRef;

  ngAfterViewInit(): void {
      const values = this.textBox?.nativeElement.value;
      debugger;
  }

}
