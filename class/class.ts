class invoice {
    client: string;
    details:string;
    amount:number;

    constructor(c:string,d:string,a:number){
        this.client=c;
        this.details=d
        this.amount=a
    }
    format(){
        return `${this.client} owes ${this.details} the sum of${this.amount}`
    }
}
const generateInvoice=new  invoice("mr sam","mr james",400)
console.log(generateInvoice)

class expensesTracker {
    expense:string;
    description:string;
    amount:number;
    constructor(e:string,d:string,a:any){
        this.expense=e;
        this.description=d;
        this.amount=a;
    }
    format(){
        return ` ${this.expense};
        ${this.description};
        ${this.amount}`
    }
}
const trackfundz=new expensesTracker("food","morning food",600)
console.log(trackfundz)
let expenses:expensesTracker[]=[]
expenses.push(trackfundz)
let myArray:string[]=[]
const arrayData=myArray.push("89")
console.log(myArray)
trackfundz.amount=7000
console.log(trackfundz)

class order {
    name:string;
    address:string;
    phoneNumber:number;
    constructor(n:string,a:string,p:number){
      this.name=n;
      this.address=a;
      this.phoneNumber=p
    }
    format (){
      return `my name is ${this.name},i live at ${this.address}, my phonenumber is ${this.phoneNumber}`  
    }

    
}

let user1=new order("emeka","75 uzor street",7043081352)
console.log(user1)
let user2:order[]=[]
user2.push(user1)
console.log(user2)

class user {
    readonly userName:string;
    private sex:string;
    public age:number;
    private dateOfBirth:{
        day:number;
        month:string;
        year:number;
    }
    constructor (u:string,s:string,a:number,d:{ day:number;month:string;year:number;}){
      this.userName=u;
      this.sex=s;
      this.age=a;
      this.dateOfBirth=d;
    
    }
    format (){
        return `i was born on ${this.dateOfBirth.day}/${this.dateOfBirth.month}/${this.dateOfBirth.year} and i am a ${this.sex}`
    }
}
let registeredUser=new user("paschal","male",23,{day:15,month:"april",year:2001})
let registeredUser1=new user("chelsea","female",25,{day:16,month:"july",year:2002})
registeredUser=new user("paschal","male",23,{day:15,month:"april",year:1998})
let registeredUser3=new user("pato","male",23,{day:15,month:"april",year:2001})
console.log(registeredUser.format())
console.log(registeredUser)

let newUsers:user[]=[]
newUsers.push(registeredUser)
newUsers.push(registeredUser1)
newUsers.push(registeredUser)
newUsers.push(registeredUser3)
console.log(newUsers)
newUsers.forEach(news=>{
    console.log(news.format())}
)

class newUser{
    constructor(private a:string,public b:string,public c:number,readonly d:{e:string,f:any}){
    }
    format(){
        return `${this.a} ${this.b} ${this.d} ${this.d}`
    }
}

let registeredUser5=new newUser("emeka","lota",5,{e:"ebuka",f:"chinedu"})
console.log("`the name of my elder brother is,`".concat(registeredUser5.b))
interface isPerson{
    name:string;
    age:number;
    speak(a:any):void;
    spend(b:number):number
}
let person:isPerson;
person={
    name:"emeka",
    age:24,
    speak(text:string):void{
        console.log(text)},
    spend(amount:number):number{
        console.log(amount)
        return amount
    }    
}


