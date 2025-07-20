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

    "void" indicates that the function should not return anything
    "void" should be used with functions that does not return anything / undefined

    "void" type only accepts undefined as value that why the function that does not return anyting / undefined is accepted as void type

    "callback function" if assign "void type" but returns a value will not throw error if value is not used else throw error
*/