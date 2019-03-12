import { Property } from './property';
import {Issue} from './issue';
import { Person } from '../../person/models/person';

export class CreditRequest {
    person: Person;
    property: Property;
    accepted?: boolean;
    issues?: Issue[];
}
