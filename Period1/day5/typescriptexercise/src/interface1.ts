
//a) Create a TypeScript interface IBook
interface IBook {
    title: string,
    readonly author: string,
    published?: Date,
    pages?: number
}


//b) Create a function that takes an IBook instance and test it with an object instance.
function getTitle(book: IBook) {
    console.log(book.title);
    // Does not work, because of readonly ->  book.author = "lol"
}

const book = {
    title: "TS for beginners",
    author: "Lars",
    published: new Date(),
    pages: 100
}

getTitle(book);

//c) Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.
/*
    Answer: if it looks like a duck, and talks like a duck, it probably is a duck
*/

//d) Change the interface to make published and pages become optional - Verify the new behaviour.
const book2 = {
    title: "TS for beginners",
    author: "Lars"
}
getTitle(book2);


//e) Change the interface to make author readonly - Verify the new behaviour.
const book3 = {
    title: "TS for beginners",
    author: "Lars"
}

//Check veryfication in function under b)


//f) Create a class Book and demonstrate the "Java way" of implementing an interface.
class Book implements IBook {
    //private _name : String;
    #title: string;
    readonly author: string;
    published?: Date;
    pages?: number;


    //title: string,
    //readonly author: string,
    //published?: Date,
    //pages?: number

    constructor(title: string, author: string, published: Date, pages: number) {
        this.#title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }


    get title(): string { return this.#title }
    set title(title: string) { this.#title = title }


    toString(): string { return this.#title, this.author, this.published ? this.published.toString() : "", this.pages ? this.pages.toString() : "0" }
}