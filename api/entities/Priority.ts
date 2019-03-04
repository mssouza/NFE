import { Query } from "./Query";
import { Resource } from "./Resource";

export class Priority extends Query {
    public name: string;
    public shortname: string;
    public description: string;
    public icon: Resource;
}
