import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  public check_box : boolean = false;

  constructor( private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  clickPersonaNatural( template : TemplateRef<any>) {
    console.log("desde persona natural", this.check_box );
    if ( !this.check_box ) this.dialog.open( template );
  }

  clickPersonaJuridica() {
    console.log("Desde persona Juridica", this.check_box )
  }

}
