import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-main',
  templateUrl: './toolbar-main.component.html',
  styleUrls: ['./toolbar-main.component.scss']
})
export class ToolbarMainComponent implements OnInit {
  @Output() ocultarPanel = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  ocultar(){
    this.ocultarPanel.emit();
  }

}
