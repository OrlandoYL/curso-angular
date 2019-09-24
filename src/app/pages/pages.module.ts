import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MaterialModule } from '../shared/modulos/material.module';
import { MenuMainComponent } from './shared/menu-main/menu-main.component';
import { ToolbarMainComponent } from './shared/toolbar-main/toolbar-main.component';


@NgModule({
  declarations: [PagesComponent, MenuMainComponent, ToolbarMainComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,MaterialModule
  ]
})
export class PagesModule { }
