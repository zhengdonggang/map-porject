import faker from 'faker';
import {Mappable} from './CustomMap'

export class  Company  implements Mappable {
    name:string;
    catchPhrase:string;
    location:{
        lat:number,
        lng:number,
    }
    color:string = '#424242';
    constructor(){
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat :parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        }
    }
   markerContent():string {
     return `
        <p>${this.name}</p>
        <p>${this.catchPhrase}</p>
     `;
   }

}
