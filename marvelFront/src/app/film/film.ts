export class Film {
    id: number;
    title: string;
    image: string;
    year: number;
    
    constructor(
        id: number,
        title: string,
        image: string,
        year: number
    ) {
        this.id = id,
            this.title = title,
            this.image = image,
            this.year = year
    }

}