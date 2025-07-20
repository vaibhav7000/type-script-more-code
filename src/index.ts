let firstName: string = "vaibhav";
const lastName: string = "chawla";

const isMarried: boolean = false;
const age: number = 23;

const middleName: null = null;
const house: undefined = undefined;


function greetUser(firstName: string): void {
    console.log(`Hello ${firstName}`);
}

greetUser("JS");

function findSum(num1: number, num2: number): number {
    return num1 + num2
}

function isLegal(age: number): boolean {
    return age ? true : false;
}

isLegal(23);


function fnToCall(callback: (value1: number, value2: number) => void, timer: number, value1: number, value2: number): void {
    setTimeout(() => {
        callback(value1, value2);
    }, timer);
}

fnToCall(function(num1: number, num2: number) {
    console.log(num1 + num2);
}, 1000, 10,20);



// greetUser(873); this will throw error, assiging number to string is not supposed todo.


// firstName = 83; this will throw compile time error because firstName has type = string and we are assigning number to it which is not possible

/*

    high level benefit of typescript is that it lets you catch type errors at compile time

    types in typescript -> number, string, boolean, undefined, null (basic types in typescript)
    All the complex type will be build using the above + interface + type

    when declaring the variables in typescript we have to provide them types.
    By-default ( implicitly ) every variable has type "any", we override this "any" to the default provide type

    "void" type indicates that the function should not return anything
    "void" should be used with functions that does not return anything / undefined (becuse it accepts undefined as value)

    "void" type only accepts undefined as value that why the function that does not return anyting / undefined is accepted as void type

    "callback function" if assign "void type" but returns a value will not throw error if returned value is not used else throw error



    "interfaces" are used to declare / define type for variables that has "key: value" pairs / multiple-properties (Define the structure of objects, classes (implements classes), function types (use to define the structure of the functions (used when passing callback, when assigning the function to variables )), or API responses). 
    
    The structure defined by the interface is only defined using { structure defination }

*/

interface User {
    firstName: string;
    lastName: string;
    age: number;
    placeOfBirth?: string; // optional not necessay to pass in the object, but if present it value should be string
}

const endUser: User = {
    firstName: "Vaibhav",
    lastName: "Chawla",
    age: 23
}

function greetEndUser(user: User): string {
    return `The endUser fullName is ${user["firstName"]} ${user["lastName"]}, age is ${user["age"]} and place of birth is ${endUser["placeOfBirth"]}`
}

greetEndUser({
    firstName: "JS",
    lastName: "Developer",
    age: 20,
    placeOfBirth: "In US"
})

interface Vehilce {
    vehicle: string
    brand: string;
    model: string;
    price: number;

    vehicleInfo: () => string;
}

// defining the stucture of class using interface ( interface are used to implements class ). Using this the class should have all the properties + method present inside the interface with values

class Car implements Vehilce {

    vehicle: string = "Car";
    brand: string;
    model: string;
    price: number;

    constructor(brand: string, model:string, price: number) {
        this["brand"] = brand;
        this["model"] = model;
        this["price"] = price;
    }

    vehicleInfo(): string {
        return `${this["vehicle"]} brand is ${this["brand"]}, model is ${this["model"]} and price is ${this["price"]}`
    }
}

class Bike implements Vehilce {
    vehicle: string = "Bike";
    brand: string;
    model: string;
    price: number;

    yom: number; // we can also have other values defined, other than interface values

    constructor(brand: string, model: string, price: number) {
        this["brand"] = brand;
        this["model"] = model;
        this["price"] = price;
        this["yom"] = 2024;
    }

    vehicleInfo(): string {
        return `${this.vehicle} model is ${this["model"]}, brand is ${this["brand"]} price is ${this["price"]}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    role: string;

    getFullName: GetterPerson;
}

// defining the structure for the function
interface GetterPerson {
    (): string
}

class Employee implements Person {
    firstName: string;
    lastName: string;
    age: number;
    role: string;
    joiningDate: Date;

    constructor(firstName: string, lastName: string, age: number, role: string) {
        this["firstName"] = firstName;
        this["lastName"] = lastName;
        this["age"] = age;
        this["role"] = role;
        this["joiningDate"] = new Date();
    }

    getFullName() {
        return `${this["firstName"]} ${this["lastName"]}`;
    }
}

// defining structure of function using interfaces
interface Getter {
    (firstName: string, lastName: string): string
}

const getfullName: Getter = function(first: string, last: string): string {
    return ""
}

/*

    "type" defines / provides "alias" ( custom name ) for "predefined types" in typescript like for number, boolean, string, undefined, null, tuples ( type AliasName = SomeType )

    use to aggregate data just like interface ( but not imeplemeted as classes )

    handle unions (either type1 | type2 ) and intersection ( combining type into one ) and provides them a single name / custom name

    "tuple" in typescript is "special type of array but with fixed number elements, and each element has fixed type" and position : [number, number]
*/

type userId = number;
type name = string;

type Status = "Pending" | "Done" | "Error"; // better way than enum

const transaction: Status = "Done";


type UserTy = {
    firstName: name;
    lastName: name;
}


function getUser(userId: userId | name): void {
    console.log(userId)
}