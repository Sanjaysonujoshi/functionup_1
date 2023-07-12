// problem 1

// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d
// We need to solve this using two methods
// using nested if else
// using logical operators

// let num=11;
// if(num%2==0 && num<15){
//     console.log("a");
// }
// else if(num%2==0 && num>15){
//         console.log("b");

// }
// else if(num%2!=0 && num<10){
//     console.log("c");

// }
// else if(num%2!=0 && num>10){
//     console.log("d");

// }


// problem 2
// Result
// answer should be: "Hi, my name is Farheena"
// we need to solve this using for loop

// let hello="Hi, my name is Farheena";
// let a="";
// for(let i=0; i<hello.length;i++){
//     a=a+hello[i]

// }
// console.log(a);



// problem 3
// global scope and local scope

// {
//     var a=50;
//     let b=500;
//     // console.log(b);

// }
// console.log(a);

// console.log(b);


// problem 4
// create a variable called myName and store your name inside it.
// then, add Mr./Miss. before it and store the result in
// a new variable with the same name i.e. myName.

// let myName="sanjay joshi"
// {

//     let myName= "Mr.sanjay joshi"
//      console.log(myName);

//  }


// problem 5
// Find sum and multiplication of all natural numbers from 10 to 20
let sum=0
// let multi=1
for(let a=10;a<=20;a++){
    sum+=a
    // multi*=a
}
console.log(sum)
// console.log(multi)


// problem 6
// Check whether a given year is a leap year
// create a variable and store a random year in it
// now write code, which should return true or false, depending whether the value in the above
// variable is leap year or not

// let year =2025
// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             console.log("True");
//         }else{
//             console.log("False");

//         }
      
//     }else{
//         console.log("True");
//     }

// }else{
//     console.log("False");
// }


// problem 7
// find the area of a triangle. Lengths of its sides are 5, 6, 7

// let a=5, b=6,c=7
// let S = (a+b+c)/2
// let area= S*(S-a)*(S-b)*(S-c)
// let result= Math.sqrt(area)
// console.log(result);



// problem 8
// create two variables and store numbers in them.
// Now, write code, which return true if one of the variable is 50 or if their sum is 50.
// Otherwise, you need to return false.
// Also handle edge cases
// (in real world, these two numbers will be supplied by the users.
// Now think what if they supply something which is not a number ?)

// let a=25;
// let b=25;
// if(typeof(a)=="number" && typeof(b)=="number"){
//     if(a==50 || b==50 || a+b==50){
//         console.log("True");
//     }else{
//     console.log(" False ");

//     }
// }else{
//     console.log(" false ");
// }

// problem 9
// create a variable and store a number inside it
// write program to check whether a given variable is between 100 and 200
// write program to check whether a given variable is between 100 and 200 or 400 and 500
// handle edge cases

// let num=123
// if(typeof(num)=="number"){

//              if(num>100 && num<200){
//                    console.log("True")
//               }else{
//                     console.log("False")
//                }
// }else{
//     console.log("Not a number")

// }

// let num=134
// if(typeof(num)=="number"){
//              if((num>100 && num<200)||(num>400 && num<500)){
//                    console.log("True")
//                    }
//                    else{
//                            console.log("False")

//                    }
// }else{
//     console.log("Not a number")

// }


// problem 10
// you have 3 numbers.
// write a program which can find the largest number

// let a=23
// let b=34
// let c=15
// console.log(Math.max(a,b,c));


// problem 11
// create two variables and assign numbers to them
// now write a code which returns true if one of them is 8 or their sum or difference is 8. Otherwise
// it should return false
 
// let a=32
// let b=16
// if( (a==8||b==8 ) || (a+b==8) || (a-b==8) ){
//     console.log("True");
// }else{
//     console.log("False");

//  }

