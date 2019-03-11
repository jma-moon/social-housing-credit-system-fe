import { Person } from './person';
import { Property } from './property';
import {Issue} from './issue';

export class CreditRequest {
    person: Person;
    property: Property;
    accepted?: boolean;
    issues?: Issue[];
}
