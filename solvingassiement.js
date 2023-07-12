// problem 1
// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d

// const num=2;
// if(num%2===0 && num<15){
//     console.log("Print a ")
// }

// if(num%2==0 && num>15){
// }
// else(
//     console.log("print b")
// )

// if (num%2!==0 && num<10){
// }
// else(
//     console.log("print c")
// )

// if (num%2!==0 && num>10){
// }
// else(
//     console.log("print d")
// )

// problem 2
// Result
// answer should be: "Hi, my name is Farheena"
// we need to solve this using for loop
// const arr=["hii","my","name","is","fareena"]
//     for(let i=0;i<arr.length; i++){
//     } console.log(arr)

//     problem 3
// global scope and local scope
// let R="i am  "


// problem 4
// create a variable called myName and store your name inside it.
// then, add Mr./Miss. before it and store the result in
// a new variable with the same name i.e. myName.

// const myName=[ "sanjay"]
// myName.unshift("Mr")
// console.log(myName)

// problem 5
// Find sum and multiplication of all natural numbers from 10 to 20

// for(let i=10; i<21; i++){
//     console.log(i+i,i)
//     break;
// }


// for(let i=10; i<21; i++){
//     console.log(i*i,i)
//     break;
// }

////
// const array=[23,45,467,789,34,989 ,56]
// .filter(x=>x%2===0)
// .map(x=>x*2)
// console.log(array)
const array=[23,45,467,789,34,989 ,56]
const[c]=array
for(let i=0;i<array[i].length;i++){
    if(i%2==0){
       c.map(x=>x*2)
    }else{
      c.map(x=>x*10)
    }
}
console.log([c]);

const practiceData = [[14,21,23,64], [33,46,51,65]]

let a=[]
let b=[]
const [d,e]=practiceData
for(let i=0;i<practiceData.length;i++){
    for(let j=0; j<practiceData[i].length;j++){
        if(i==0){
        a=d.filter(x=>x%2==0)
    }
    else{
        b=e.filter(x=>x%2==0)
    }
}
}
console.log([a,b]);