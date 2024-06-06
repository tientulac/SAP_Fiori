export class BaseEntity {
    id?: number;
    name?: string;
    born?: number;

    constructor(_id?: number, _name?: string, _born = 0) {
        this.id = _id;
        this.name = _name;
        this.born = _born;
    }
}
