import { Film } from "../film/film";

export class Personnage {
    id: number;
    name: string;
    image: string;
    alias: string;
    description: string;
    films! : Film[];

    
    constructor(
        id: number,
        name: string,
        image: string,
        alias: string,
        description: string,
        films : Film[]
    ) {
        this.id = id,
            this.name = name,
            this.image = image,
            this.alias = alias,
            this.description = description,
            this.films = films
    }

}