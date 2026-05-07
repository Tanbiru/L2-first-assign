// Solution 1

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 === 0);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);




// Solution 2

function reverseString(text: string): string {
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed = reversed + text[i];
    }

    return reversed;
}

reverseString("typescript");




// Solution 3


type StringOrNumber = string | number;


function checkType(value: StringOrNumber): "String" | "Number" {
    if (typeof value === "string") {
        return "String";
    } else {
        return "Number";
    }
}

checkType("Hello");
checkType(42);






// solution 4

function getProperty<X, Y extends keyof X>(obj: X, key: Y): X[Y] {
    return obj[key];
}


const user = {
    id: 1,
    name: "John Doe",
    age: 21,
};
getProperty(user, "name");






// Solution 5


interface Book {
    title: string;
    author: string;
    publishedYear: number;
}


function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return { ...book, isRead: true };
}


const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
};

 toggleReadStatus(myBook);






//  Solution 6

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return "Name: " + this.name + ", Age: " + this.age + ", Grade: " + this.grade;
    }
}

const student = new Student("Alice", 20, "A");
student.getDetails();






// solution 7

function getIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(item => arr2.includes(item));
}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);



