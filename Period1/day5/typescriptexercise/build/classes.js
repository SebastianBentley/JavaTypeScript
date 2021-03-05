"use strict";
//a) Provide the class with a nice (using template literals) toString() method
//+ a getter/setter for the colour property. Verify that you cannot (why) make an instance of this class.
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
var _color, _radius, _height;
class Shape {
    constructor(color) {
        _color.set(this, void 0);
        __classPrivateFieldSet(this, _color, color);
    }
    get getColor() { return __classPrivateFieldGet(this, _color); }
    set setColor(color) { __classPrivateFieldSet(this, _color, color); }
    toString() { return `area: ${this.area}, perimiter: ${this.perimeter}, color: ${__classPrivateFieldGet(this, _color)}`; }
}
_color = new WeakMap();
//It is impossible to create an instance of a class, since it it abstract...
//b) Create a new class Circle that should extend the Shape class.
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        _radius.set(this, void 0);
        __classPrivateFieldSet(this, _radius, radius);
    }
    get area() {
        return (Math.PI * Math.pow(__classPrivateFieldGet(this, _radius), 2));
    }
    get perimeter() {
        return Math.PI * (2 * __classPrivateFieldGet(this, _radius));
    }
    get getRadius() { return __classPrivateFieldGet(this, _radius); }
    set setRadius(radius) { __classPrivateFieldSet(this, _radius, radius); }
    toString() { return `${super.toString()} radius: ${__classPrivateFieldGet(this, _radius)} `; }
}
_radius = new WeakMap();
const circle = new Circle("blue", 5);
console.log(circle.toString());
circle.setColor = "Green";
circle.setRadius = 6;
console.log(circle.toString());
//C) Create a new class Cylinder (agreed, definitely not a perfect inheritance example) that should extend the Circle class.
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        _height.set(this, void 0);
        __classPrivateFieldSet(this, _height, height);
    }
    get area() {
        return super.area;
    }
    get perimeter() {
        throw new Error("Method not implemented.");
    }
    get volume() {
        return (this.area * __classPrivateFieldGet(this, _height));
    }
    get getHeight() { return __classPrivateFieldGet(this, _height); }
    set setHeight(height) { __classPrivateFieldSet(this, _height, height); }
    toString() { return `area: ${this.area}, color: ${super.getColor}, volume: ${this.volume}`; }
}
_height = new WeakMap();
const cylinder = new Cylinder("red", 5, 5);
console.log(cylinder.toString());
//# sourceMappingURL=classes.js.map