// console.log("Hello World");



// const add = (a:any, b:number) => a+b

// Merhaba

// Dünya

//& Type annotations & Basic Types
// let x: number = 5

// x = 25

// let yy = "Dünya"
// let y: string = `Hello ${yy}`

// yy = 5

// let z: boolean = true

// let a: number

// let b;

//& Arrays

// let arr:number[] = [1,2,3,4]

// arr.push("a")

//? Bos array tanimlamasi
// let arr2: string[] = []

// arr2.push("Hello")
// arr2.push(false)

// let arr3:any[] = []

// arr3.push("Hello")
// arr3.push(false)
// arr3.push(5)

//& Tuples

// let myTuple: [number,string]

// myTuple = [1, "Sevgi"]

// console.log(myTuple);

// myTuple.push(false)
// myTuple.push("Hello")

//& Array of Tuples

// let arrTuple: [number,string][] = []

// arrTuple.push([1,"Sevgi"])
// arrTuple.push([2,"Enes"])

// console.log(arrTuple);

//& Enums

const enum Role{
    User, //0
    Admin //1 
}

let currentUser:Role = Role.User

console.log(currentUser);

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = NotFound - 4,
   
}

const request: StatusCodes = StatusCodes.Success

//? String Enums
enum Tshirts {
    Small = "S",
    Medium = "M",
    Large = "L"
}

let size: Tshirts = Tshirts.Large

//? Mixed enum
enum Tshirts2 {
    Small = "S",
    Medium = "M",
    Large = "L",
    XLarge = 42,
    XXlarge, //43
    XXXLarge = XLarge + 4,
    XXXXLarge  //47
}

//? Deger atamasi icin fonksiyon kullanimi

enum PrintMedia {
    Newspaper = 1,
    Newsletter = getPrintMediaCode("newsletter"),
    Magazine = Newsletter * 3,
    Book = 10
}

function getPrintMediaCode(mediaName:string): number {
    if (mediaName === "newsletter") {
        return 5;
    }
}

PrintMedia.Newsletter; // returns 5
PrintMedia.Magazine; // returns 15

PrintMedia["Magazine"]  // returns 15