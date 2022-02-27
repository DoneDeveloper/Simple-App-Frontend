import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
     setInterval(() =>{ 
       this.dialog.closeAll();
     }, 4000);
  }

  close(): void {
    this.dialog.closeAll()
  }

}
