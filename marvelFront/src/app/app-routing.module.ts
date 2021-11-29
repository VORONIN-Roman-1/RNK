import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailFilmComponent } from "./film/detail-film.component";
import { DetailPersonnageComponent } from "./personnage/detail-personnage.component";
import { ListPersonnageComponent } from "./personnage/list-personnage.component";



const appRoutes: Routes = [ 

    { path: 'films', component:DetailFilmComponent  },
    { path: 'film/:id', component: DetailFilmComponent },
    { path: 'personnage/:id', component: DetailPersonnageComponent },
    { path: 'personnages', component: ListPersonnageComponent },
    { path: '', redirectTo : 'films', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }