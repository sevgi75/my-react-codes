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

let myTuple: [number,string]

myTuple = [1, "Sevgi"]

console.log(myTuple);

myTuple.push(false)
myTuple.push("Hello")

//& Array of Tuples

let arrTuple: [number,string][] = []

arrTuple.push([1,"Sevgi"])
arrTuple.push([2,"Enes"])

console.log(arrTuple);