//a) Provide the class with a nice (using template literals) toString() method
//+ a getter/setter for the colour property. Verify that you cannot (why) make an instance of this class.

abstract class Shape {
    #color: string;
    constructor(color: string) {
        this.#color = color;
    }
    abstract get area(): number;
    abstract get perimeter(): number;
    get getColor(): string { return this.#color }
    set setColor(color: string) { this.#color = color }

    toString(): string { return `area: ${this.area}, perimiter: ${this.perimeter}, color: ${this.#color}` }

}

//It is impossible to create an instance of a class, since it it abstract...

//b) Create a new class Circle that should extend the Shape class.

class Circle extends Shape {

    #radius: number;
    constructor(color: string, radius: number) {
        super(color);
        this.#radius = radius;
    }
    get area(): number {
        return (Math.PI * Math.pow(this.#radius, 2));
    }
    get perimeter(): number {
        return Math.PI * (2 * this.#radius);
    }

    get getRadius(): number { return this.#radius }
    set setRadius(radius: number) { this.#radius = radius }

    toString(): string { return `${super.toString()}, radius: ${this.#radius} ` }
}


const circle = new Circle("blue", 5);

console.log(circle.toString())
circle.setColor = "Green"
circle.setRadius = 6;

console.log(circle.toString())

//C) Create a new class Cylinder (agreed, definitely not a perfect inheritance example) that should extend the Circle class.
class Cylinder extends Circle {
    #height: number;
    constructor(color: string, radius: number, height: number) {
        super(color, radius);
        this.#height = height;
    }

    get area(): number {
        return super.area;
    }

    get perimeter(): number {
        throw new Error("Method not implemented.");
    }

    get volume(): number {
        return (this.area * this.#height)
    }

    get getHeight(): number { return this.#height }
    set setHeight(height: number) { this.#height = height }

    toString(): string { return `area: ${this.area}, color: ${super.getColor}, volume: ${this.volume}` }
}

const cylinder = new Cylinder("red", 5, 5);
console.log(cylinder.toString())