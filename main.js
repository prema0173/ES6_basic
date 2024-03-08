"use strict" /*eita use hoy kono vul hole error show korbe tai*/
console.log('Hello World');

let poorcountry=['Bangladesh', 'Srilanka'];
let richcountry=[...poorcountry,'India','America','Spain'];
console.log(richcountry)  /*this three dot ... is called spread operator*/

let poorman=['Jewel','Jahid'];
let richman=['Nabil','Roni'];
richman.push(poorman);
console.log(richman) /*Without Spread Operator we can use push*/

//  Rest Parameter start
function Calculate(...numbers){
 let sum=0;
 for(let i of numbers){
  sum+=i;
 }
 console.log("sum="+sum);
}
Calculate(1,2,3,4,5);
//  Rest Parameter end

// Dynamic Function start
var f= function(namevalue){
  return namevalue;
}
console.log(f("Prema Khatun"));
// Dynamic Function end

//  ES6 Variable
var name="Hossain";
    name="Arik"; 

    console.log(name); /*var diye variable redeclare and reassign kora jay*/

var name1="Nabil";
var name1="Roni"; /*Redeclair*/

console.log(name1);

let name2="Shoriot";
    name2="Sujana";

console.log(name2);/*let diye variable reassign kora jay kintu redeclare kora jay na*/

const name3="Sayeed";

console.log(name3);/*const  diye variable reassign or redeclare konotai kora jay na*/

// Variable Scope

function myfun(){
  var name4="localvar"; /*local variable*/ 
  console.log(name4);
}
myfun();

// globar variable example start
var name5="globalvar"; 
function myfunction(){
}
console.log(name5);


var name6="Globalvar"; 
function myfunction(){
  console.log(name6)
}
myfunction();
// globar variable example end.

// Variable Hoisting
role="principal";  /* variable assign korbo agee declare korbo pore ei system ke hoisting bole*/
console.log(role);
var role;

// Simple For Loop

var i;
for (i=0;i<=100;i++){
  console.log("Allah");         /* i for iteration jar maddhome loop bar bar ghure bojhay*/
}

var i;
for (i=0;i<=100;i=i+30){
  console.log("Allah");
}


// Simple For of Loop
var Mycountry=['Dhaka','Sirajganj','Nouga','Badda']
for(let Mycity of Mycountry){
  console.log(Mycity);
}

// Object Basic Concept
var billgates={shirt:"True",shirtcolor:"Gray",coshma:"True",coshmacolor:"Black",sweater:"True",sweatercolor:"nutty"}
console.log(billgates["coshmacolor"]);

// nested Object start
var billgatespro={
  shirt:{
    color:"Gray",
    quality:"Good",
    price:"23USD"
  },
  coshma:{
    color:"Black",
    quality:"Good",
    price:"233USD"
  },
  sweater:{
    color:"Blue",
    quality:"Good",
    price:"33USD"
  },
}
console.log(billgatespro["shirt"]["price"]);
// nested Object End.

// For in loop
var billgate={shirt:"True",shirtcolor:"Gray",coshma:"True",coshmacolor:"Black",sweater:"True",sweatercolor:"Pink"}
for(let props in billgate){
  console.log(props);
  console.log(billgate[props]);
  console.log(props+"="+billgate[props]);
}

//  simple function and parameterized functions
function myName(x,y){                /* this is parameterized function*/
  var z=x+y;
  console.log(z)
}

myName(10,20);
 
// this is Rest parameter 
function something(...x){
console.log(x[7])
}
something(1,2,3,4,6,7,8,"A","B");

//  Returning function start
function FunOne(){
  return 20;
}
function FunTwo(){
  return 30;

}
console.log(FunOne()+FunTwo())


function FunOne(){
  return 20;
}
function FunTwo(){
  return FunOne();

}
console.log(FunTwo())
//  Returning function end


//  Anonymous function start
var anoFun= function Onefun(){
  return "Hello";
}
console.log(anoFun());
                           
// second type
var anoFun= function Onefuns(X){
  return X;
}
// console.log(anoFun("Hello Again"));

// anonymous function reassign kora jay
var anoFun= function Onefuns(X){
  return X;
}
console.log(anoFun("Hello Again2"));
//  Anonymous function End

//  Arrow function start
 var Arrayfun=()=>{
console.log("This is Array Function")
}
Arrayfun();

// 2nd type
var Arrayfuns=(Y)=>{
  console.log(Y)
  }
  Arrayfuns("this is array function");

  // 3rd type
  var Arrayfunss=(z)=>{
    return z;
    }
    console.log(Arrayfunss("Hello Again"));
    //  Arrow function End.


    // simple arrays(Array 2 vabe declare kora jay)
    var myArray= new Array("A","B","C","D");
    console.log(myArray[3])
    
    
    var MyArraypro=[1,2,3,4,5,6,7]
    for(let item of MyArraypro){
    console.log(item);
    }

    // Multidimensional Arrays

    var siraj=["Bel","Sayd","Mokim"]
    var Nouga=["Saphr","Manik","Porsa"]
    var savr=["Dhnmnd","Badda","Banani"]

    var areaa=[siraj,Nouga,savr]
    console.log(areaa[1][2]);

    // array de-structuring
    var siraji=["Belu","Saydabd","Mokimpr","Gosala"]
    var[,,,a]=siraji
    console.log(a);

    /* es6 map*/
     var myMap= new Map();

     myMap.set("key1","Thailand")
     myMap.set("key2","Franc")
     myMap.set("key3","Itali")
     myMap.set("key4","Portugal")
     myMap.set("key5","Brazil")
     myMap.set("key6","Paris")

    //  console.log(myMap.values())
    //  console.log(myMap.keys())

   /*use of delete  method*/
    myMap.delete("key1")
    myMap.delete("key4")

    /*use of clear  method*/
    // myMap.clear();
    
    /*use of get  method*/
    // console.log(myMap.get("key5"));

    /*use of has  method*/

    if(myMap.has("key6")){
      console.log("Yes");
    }else{
      console.log("No");
    }

    /* for of loop in map*/
    // for(let myValue of myMap.values()){
    //    console.log(myValue);
    // }
  //   for(let myKey of myMap.keys()){
  //     console.log(myKey);
  //  }

  /* es6 set*/
  var mySet=new Set();

  mySet.add('India');
  mySet.add('Franch');
  mySet.add('Itali');
  mySet.add('India');
  mySet.add('Portugal');
  mySet.add('India');

  console.log(mySet);
  console.log(mySet.size);
  console.log(mySet.values());

  /*use of delete  method*/
  mySet.delete("Itali")
  

  /*use of clear  method*/
  // mySet.clear();

if (mySet.has('Portugal')){
console.log('Yes');
}
else{
  console.log('No');
}
 

// es6 create class and use start

class MyClass{
MyFun(){
  console.log('This is a function inside class')
}
MyFun1(){
  console.log('This is a function inside class 1')
}
MyFun2(){
  console.log('This is a function inside class 2')
}
}

var obj= new MyClass;

obj.MyFun();
obj.MyFun1();
obj.MyFun2();


// Parameterized class
class MyClasss{
  MyFun4(car){
    console.log(car)
  }
  MyFun5(car){
    console.log(car)
  }
  MyFun6(car){
    console.log(car)
  }
  }
  var obj= new MyClasss;

obj.MyFun4('Corola');
obj.MyFun5('Marcidies');
obj.MyFun6('Ferary');
// es6 create class and use end

// es6 class constructor start
 class MyCons{
  constructor(){
    console.log('Constructor call korte hoy na, just object create korlei auto call hoye jay')
  }
 }

 var obj= new MyCons;

//  es6 parameterized class constructor
class MyConsP{
  constructor(a,b){
  console.log(a+b);
  }
}

new MyConsP(10,20);

// class variable inside a class
class MyconsP{
  constructor(a,b){
    this.firstnum=a
    this.secondnum=b
  }
add(){
  let rslt=this.firstnum +this.secondnum;
  console.log(rslt);
}  
}

var obj=new MyconsP(30,20);

obj.add();

// es6 static keyword
class Mystatcls{
  static hello(){
    console.log('Static property directly class diye call korte hoy');
  }
}
Mystatcls.hello();

// es6 class inheritance
class Parent{
  hi(){
    console.log('Hello fun1')
  }
  hi1(){
    console.log('Hello fun2')
  }
  hi2(){
    console.log('Hello fun3')
  }
}

class child extends Parent{

}

var obj= new child();

obj.hi();
obj.hi1();
obj.hi2();

// Method overwritting

class Parents{
  hey(){
    console.log('Hello fun1');
  }
}

class childs extends Parents{
  hey(){
 console.log('Hello fun1 this is called method over writting');
}
}
var obj= new childs();

obj.hey();

// super keyword diye parent class ke child class er moddhe direct call kora jay
class prntSpr{
  spr(){
    console.log('Super keyword just inheritance er time a use kora hoy')
  }
}
class childSpr extends prntSpr{
  sprr(){
    super.spr();
  }
}

var obj= new childSpr;
obj.sprr();

var nn=12;
var nn1=25;
var nn2="8";
var rslt=nn+nn1+nn2;
 console.log(rslt);