let character="theif"
let myNumber=30
let isMarried=false

// typescript does not allow change of datatype once it is assigned
// character=50

const circ=(diameter: number)=>{
    return diameter*Math.PI
}

console.log(circ(6))

// explicit type
let boy: String;

boy="lota"
let num:number
num =67
let isSingle:boolean
isSingle=false
// array
//inticializing the array to be empty
let classMate:string[]=[]
classMate=["food"]
console.log(classMate)
//union types
let schoolMate:(string|number|boolean)[]=[]
schoolMate.push("chizoba")
schoolMate.push(90)
schoolMate.push(false)
schoolMate.push("chinedu",true,89)
console.log(schoolMate)
//objects
let stack:object
stack={name:"lota",numb:56}
console.log(stack)

let frontend:{
    names:string
}
frontend={names:"chinedu"}
console.log(frontend)
//any is used when declaring a variable that can have value of any data type

let job:any
job=20
console.log(job)
job=false
console.log(job)
job='laundry'
console.log(job)
//functions
let myFunction:Function
myFunction=()=>{
    console.log("my name is paschal")
}
let theFunction=(name:string|number,age:number,isEmployed:boolean)=>{
   console.log(`my name is ${name},i am ${age}.`)
   console.log(`employmentStatus:${isEmployed}`)
}
theFunction("paschal",29,true)
// optional parameters
myFunction=(name:string,age:number,isEmployed?:boolean)=>{
    console.log(`my name is ${name},i am ${age}.`)
    console.log(`employmentStatus:${isEmployed}`)  
}
myFunction("paschal",29)
// default value
myFunction=(name:string,age:number,isEmployed:boolean|string="yes")=>{
    console.log(`my name is ${name},i am ${age}.`)
    console.log(`employmentStatus:${isEmployed}`)  
}
myFunction("paschal",29)
//void is complete lack of value
let theFunctions=(a:number,b:number)=>{
  return a + b
}
let result=theFunctions(3,7);
console.log(result)
// type aliases
type str=string
type anyData=any
type int=number
type boo=boolean
type obj={name:anyData,age:int,isEmployed:boo,sex:str}
let anotherFunction=(user:{name:anyData,age:number,isEmployed:boolean,sex:string})=>{
console.log(user)
}

let greetFunction=(user:obj)=>{
console.log(user)
}
const date=new Date
const todaysDate=date.toTimeString()
console.log(todaysDate)
const greetUser=()=>{

}