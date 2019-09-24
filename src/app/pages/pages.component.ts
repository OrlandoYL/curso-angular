import { Component, OnInit } from '@angular/core';
const MINIMA_PANTALLA = 720;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  filtro:string = `(max-width: ${MINIMA_PANTALLA}px)`;
  private mediaMatcher : MediaQueryList = matchMedia(this.filtro)
  constructor() { }

  ngOnInit() {
  }
  espantallaChica(){
    return this.mediaMatcher.matches;
  }

}
