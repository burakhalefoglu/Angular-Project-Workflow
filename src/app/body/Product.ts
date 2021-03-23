

export class Product {

    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id: number, title: string, description: string, price: number, imageUrl: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;


    }


}