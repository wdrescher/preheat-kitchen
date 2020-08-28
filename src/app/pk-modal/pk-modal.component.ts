import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'pk-modal',
  templateUrl: './pk-modal.component.html',
  styleUrls: ['./pk-modal.component.scss']
})
export class PkModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PkModalComponent>
  ) { }

  ngOnInit() { }

  closeModal() {
    this.dialogRef.close();
  }
}
