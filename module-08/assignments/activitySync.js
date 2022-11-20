const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve,ms));

const inc = (a)=>
new Promise((resolve) =>
wait().then(() => resolve(a+1)));



const sum = (a,b)=>
new Promise((resolve)=>
wait().then(() => resolve(a+b)));

const max =(a,b)=>
new Promise((resolve)=> 
wait().then(()=> resolve(a>b?a:b)));

const avg = (a,b) =>
new Promise((resolve)=>
wait().then(() => resolve(a,b))
.then((s) => resolve(s/2)));


const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return new Promise((resolve) =>
    wait().then(() => 
    resolve(this.name.split(sep))));
  }
};


class Person {
    constructor(name) {
      this.name = name;
    }

    static of(name) {
      return new Promise((resolve) => 
      wait().then(()=> resolve(new Person(name))));

    }
     split(sep = " ") {
      return new Promise((resolve) => 
      wait().then(() => 
      resolve(this.name.split(sep))));


  }}



inc(5).then((value) => console.log(`inc(5) = ${value}`));
sum(5,6).then((value) => console.log(`sum(5,6) = ${value}`));
max(5,6).then((value) => console.log(`max(5,6) = ${value}`));
avg(5,6).then((value) => console.log(`avg(5,6) = ${value}`));
obj.split().then(value => console.log(`split() = ${value}`));

Person.of("Marcus Aurelius")
.then(person => person.split())
.then((value) => console.log(`Class Split = ${value}`));