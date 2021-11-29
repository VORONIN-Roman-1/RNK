import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailPersonnageComponent } from './detail-personnage.component';
import { PersonnageService } from './personnage.service';


@NgModule({

    imports: [
        CommonModule
    ],

    declarations: [
        DetailPersonnageComponent
    ],

    providers: [
        PersonnageService
    ]
})


export class PersonnageModule { }