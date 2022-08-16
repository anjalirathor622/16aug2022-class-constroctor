//multilevel inheritance

class ClassA{
    //properties
    name = 'anjali'

    //constructor
    constructor(name){
        console.log('hello '+this.name + ' constructor')
    }
    //methods
    myMethodA(name){
        console.log(`helllo${this.name}from myMehodA`)
        
    }
}
class ClassB extends ClassA{
    //properties
    surname = 'rathor'
    
    //constructor
    constructor(name,surname){
        super();
        console.log(`hello ${this.name} ${this.surname} constructor`)
    }
    //methods
    myMethodB(name){ 
        console.log(`helllo ${this.name}${this.surname} from myMehodB`)
        x.myMethodA();
    }
} 
class ClassC extends ClassB{
    //properties
    A = 'everyone';
    //constructor
    constructor(A){
        super();
        console.log(`hello ${this.A} from C constructor`)
    }

    //methods
    myMethodC(A){ 
        console.log(`helllo ${this.A} from myMehodC`)
        x.myMethodA();
    }
}

let x = new ClassC();
x.myMethodA();
x.myMethodB();