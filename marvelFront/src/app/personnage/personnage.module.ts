import { PersonnageRoutingModule } from './personnage-routing.module';


import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailPersonnageComponent } from './detail-personnage.component';
import { ListPersonnageComponent } from './list-personnage.component';
import { PersonnageService } from './personnage.service';
import { PersonnageSearchComponent } from './search-personnage.component';


@NgModule({

    imports: [
        CommonModule,
        PersonnageRoutingModule
        
    ],

    declarations: [
        DetailPersonnageComponent, 
        ListPersonnageComponent,
        PersonnageSearchComponent
        
    ],

    providers: [
        PersonnageService
    ]
})


export class PersonnageModule { }