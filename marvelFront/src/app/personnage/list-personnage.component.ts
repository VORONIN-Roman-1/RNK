import { PersonnageService } from './personnage.service';
import { Personnage } from './personnage';
import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'list-personnage',
    templateUrl: './list-personnage.component.html'
})
export class ListPersonnageComponent implements OnInit {
    condition = true;
    personnages!: Personnage[];
    options = { fullWidth: false };

  constructor( 
      private route: ActivatedRoute,
      private router : Router,private personnageService: PersonnageService) { }

      ngOnInit(): void {
        this.getPersonnages();
    }
    ngAfterViewInit() {
    }

    getCarousel() {
        let elems = document.querySelectorAll('.carousel');
        let instances = M.Carousel.init(elems, this.options);
         setTimeout(() => {
            this.condition = false;
        }, 0);
    }
      getPersonnages(): void {
        this.personnageService.getPersonnages()
        .subscribe(personnages => this.personnages = personnages );
}
selectPersonnages(personnage: Personnage) {
  // alert("Vous avez cliqué sur le personnage : " + personnage.name)
  let link = ['/personnage', personnage.id];
  this.router.navigate(link);
}


}