import { Personnage } from './../personnage/personnage';
export class Film {
    id: number;
    title: string;
    image: string;
    year: number;
    personnages!: Personnage[];
    
    constructor(
        id: number,
        title: string,
        image: string,
        year: number,
        personnages: Personnage[]
        
    ) {
        this.id = id,
            this.title = title,
            this.image = image,
            this.year = year,
            this.personnages = personnages

    }

}