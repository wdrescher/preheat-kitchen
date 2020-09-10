import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pk-button',
  templateUrl: './pk-button.component.html',
  styleUrls: ['./pk-button.component.scss']
})
export class PKButtonComponent implements OnInit {
  @Input() text: string; 
  @Input() loading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
