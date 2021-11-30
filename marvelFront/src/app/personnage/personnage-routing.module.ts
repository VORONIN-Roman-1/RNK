import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { DetailPersonnageComponent } from './detail-personnage.component';
import { ListPersonnageComponent } from './list-personnage.component';



// Les Routes du module Personnage
const personnagesRoutes: Routes = [

    { path: 'personnages', component: ListPersonnageComponent },
    { path: 'personnage/:id', component: DetailPersonnageComponent },
    
];

@NgModule({

    imports: [
        RouterModule.forChild(personnagesRoutes)
    ],
    exports : [
        RouterModule
    ]
})

export class PersonnageRoutingModule { }