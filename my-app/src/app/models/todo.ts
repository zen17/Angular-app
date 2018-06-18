export class Todo {
    constructor(
        public id:number,
        public task:string,
        public checked:boolean,
        public priority:Priority
    ){}
}

export enum Priority {
    Low="Low",
    Medium="Medium",
    High="High"
}