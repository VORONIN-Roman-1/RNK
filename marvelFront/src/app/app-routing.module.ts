import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailFilmComponent } from "./film/detail-film.component";



const appRoutes: Routes = [ 

    
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