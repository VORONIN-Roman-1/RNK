import { PersonnageService } from './personnage.service';
import { Personnage } from './personnage';
import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from '@angular/router';

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


}