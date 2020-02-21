export class Diary {

    constructor(
        public id: number,
        public title: string,
        public password: string,
        public dateCreated: Date,
        public totalEntries: number
    ) { }
}
