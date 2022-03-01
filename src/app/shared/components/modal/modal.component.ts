import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  constructor(private dialog: MatDialogRef<any>) { }

  ngOnInit(): void {
      setInterval(() =>{ 
        this.dialog.close();
      }, 2000);
  }

  close(): void {
    this.dialog.close()
  }

}
