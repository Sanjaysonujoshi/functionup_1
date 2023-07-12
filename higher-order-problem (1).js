 // write your own find and findIndex function
// (Hint: using for loop and if else)
//find function
//  const age=[10,20,30,40,50,60]
//  for(i=0;i<age.length;i++){
//   if(age[i]>10){
//   a=i;
//   break;
//  }
const array=[1,3,4,5,6].filter(x => x%2==0)
console.log(array)

//  }
// console.log(a);
// ======================================================== //



// const practiceData = [[14,21,23,64], [33,46,51,65]]

//  * requirement one
//  * increment each number by one and output the resultant array using a higher order method and for loop
//  * HINT: use nesting
//  * solution =  [[15,22,24,65], [34,47,52,66]]
//  *     
const practiceData =[[14,21,23,64],[33,46,51,65]]
let a=[]
let b=[]
const [c,d]=practiceData
for(let i=0; i<practiceData.length;i++){
    for (let j=0; j<practiceData[i].length;j++ ){
        if(i==0){
            a=c.map(x=>x+1)
        }else{

            b=d.map(x=>x+1)
        }
       
       }
    }     console.log([a,b]);
 
//  * requirement two
//  * from the above array, create an array of array of even numbers using a higher order method and for loop
//  * solution = [[14,64], [46]]
//  */ 
  

    // let a=[]
    // let b=[]
    // const [d,e]=practiceData
    // for(let i=0;i<practiceData.length;i++){
    //     for(let j=0; j<practiceData[i].length;j++){
    //         if(i==0){
    //         a=d.filter(x=>x%2==0)
    //     }
    //     else{
    //         b=e.filter(x=>x%2==0)
    //     }
    // }
    // }
    console.log([a,b]);


// ======================================================== //

    const array = [23 , 45,467, 789, 34, 989, 56]

    // problem => return an array such that numbers at odd idex are multiplied by 2
    // and numbers at even index are multiplied by 10
    for(let i=0;i<array.length;i++){
      if(i%2===0){
        console.log(array[i]*10)
      }
      else{
        console.log(array[i]*2)
      }
    }
// ======================================================== //




 const carBrands = ["honda", "toyota", "maruti","tata"]
 const carModel = ["city", "innova", "alto", "nano"]
 
const carObject = {}
//  using a higher order method, create a carObject variable such that 
/**
 * 
 * {
 * honda:city,
 * toyota:innova,
 * maruti:alto,
 * tata:nano
 * }
 */
 
 carBrands.forEach((element,index)=>{carObject[element]=carModel[index];})
 console.log(carObject)
 
// ======================================================== //


 /**
  *  Flattening
 Use the reduce method 
 to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 
 const arrays = [[1, 2, 3], [4, 5], [6]];
 // result =  [1, 2, 3, 4, 5, 6]
  * 
  * 
  */
 const arr1 = [[1, 2, 3], [4, 5], [6]];
const flattened = arr1.flatMap(num => num);
console.log(flattened);


// ======================================================== //


//  /**
//   * const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
//   * return an array with all words converted into uppercase using higher order function
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
   
const result=countries.map(
  function(upper){
      return upper.toUpperCase()
  }
)
console.log(result)
// ======================================================== //





