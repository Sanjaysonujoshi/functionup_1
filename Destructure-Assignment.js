// const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
// const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// IMPORTANT: solve all problems using using destructuring and rest syntax

		
// ============================================================================= //
// //1.
// // remove first element from places array and print the remaining array 
// //result = ['gurgaon', 'jaipur', 'pune']
// const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
// const [a,...d] = places;
// console.log([...d]);

// ============================================================================= //
//2.
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']
 
// const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
// const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
// let[arr1]=places;
// console.log([arr1,...morePlaces]);

// ============================================================================= //
// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]
// const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
// const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
// const [a,...b]=morePlaces;
// const [d,e,f]=places;
// console.log([...b,...[d,e,f]])


const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  }
  
//      // 4.
//      // destructure and store pincode into a variable named myPincode
    const {
      address:{
        pinCode:myPincode,
      } } = myData
console.log(myPincode)
//      // 5.
//      // destructure and store second like into a vaiable named myLike
const {
  likes:[a,mylike]
} = myData
console.log(mylike)