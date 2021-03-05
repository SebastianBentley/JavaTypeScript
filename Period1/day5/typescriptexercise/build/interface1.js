"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _title;
//b) Create a function that takes an IBook instance and test it with an object instance.
function getTitle(book) {
    console.log(book.title);
    // Does not work, because of readonly ->  book.author = "lol"
}
const book = {
    title: "TS for beginners",
    author: "Lars",
    published: new Date(),
    pages: 100
};
getTitle(book);
//c) Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.
/*
    Answer: if it looks like a duck, and talks like a duck, it probably is a duck
*/
//d) Change the interface to make published and pages become optional - Verify the new behaviour.
const book2 = {
    title: "TS for beginners",
    author: "Lars"
};
getTitle(book2);
//e) Change the interface to make author readonly - Verify the new behaviour.
const book3 = {
    title: "TS for beginners",
    author: "Lars"
};
//Check veryfication in function under b)
//f) Create a class Book and demonstrate the "Java way" of implementing an interface.
class Book {
    //title: string,
    //readonly author: string,
    //published?: Date,
    //pages?: number
    constructor(title, author, published, pages) {
        //private _name : String;
        _title.set(this, void 0);
        __classPrivateFieldSet(this, _title, title);
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
    get title() { return __classPrivateFieldGet(this, _title); }
    set title(title) { __classPrivateFieldSet(this, _title, title); }
    toString() { return __classPrivateFieldGet(this, _title), this.author, this.published ? this.published.toString() : "", this.pages ? this.pages.toString() : "0"; }
}
_title = new WeakMap();
//# sourceMappingURL=interface1.js.map