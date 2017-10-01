export class Article{
    public title: string;
    public link: string;
    public point: number;

    constructor(title: string, link: string, point: number) {
        this.title = title;
        this.link = link;
        this.point = point;
    }
}