export class Ingredient {
    // public name: string;
    // public amount : number;  //alternative method

    constructor( public name: string, public amount:number){   //assign the values
        this.name = name;
        this.amount = amount;
    }
}