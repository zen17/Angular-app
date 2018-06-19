export class Todo {
    constructor(
        public id:number,
        public task:string,
        public checked:boolean,
        public priority:Priority,
        public date:string
    ){}
}

export enum Priority {
    Low="Low",
    Medium="Medium",
    High="High"
}