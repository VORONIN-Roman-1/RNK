import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailFilmComponent } from "./film/detail-film.component";



const appRoutes: Routes = [ 

    { path: 'films', component:DetailFilmComponent  },
    { path: 'film/:id', component: DetailFilmComponent },
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