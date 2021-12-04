import { PersonnageService } from './personnage.service';
import { Personnage } from './personnage';
import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../film/film';

@Component({
    selector: 'detail-personnage',
    templateUrl: './detail-personnage.component.html'
})
export class DetailPersonnageComponent implements OnInit {

    personnage!: Personnage;
  constructor( 
      private route: ActivatedRoute,
      private router : Router,private personnageService: PersonnageService) { }

 
  ngOnInit() : void { 
    let id = +this.route.snapshot.paramMap.get('id')! ;
    this.personnageService.getPersonnage(id).subscribe(personnage => this.personnage = personnage);
}
goBack(): void {
    this.router.navigate(['/personnages/']);
}
update(personnage: Personnage) {
    this.personnageService.updatePersonnage(personnage).subscribe(() => this.goBack());
}

delete(personnage: Personnage)  {
    this.personnageService.deletePersonnage(personnage).subscribe(_ => this.goBack());
    }

    selectFilm (film : Film){
        let link = [ '/film', film.id];
    
        this.router.navigate(link);
    }
}
