export class Personnage {
    id: number;
    name: string;
    image: string;
    alias: string;
    description: string;
    constructor(
        id: number,
        name: string,
        image: string,
        alias: string,
        description: string
    ) {
        this.id = id,
            this.name = name,
            this.image = image,
            this.alias = alias,
            this.description = description
    }

}