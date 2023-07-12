const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

// =========================================== 1 ==================================================== //


function findCard(value, suit) {
    let a=false;
    for (let index = 0; index < cardData.length; index++) {
        if(cardData[index].suit==suit && cardData[index].value==value){
            a=true
        }
    }
    return a
    }
    const getresult=findCard(10,'club')
    console.log(getresult)



/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/

// =============================================== 2 ================================================ //


// function getSuits(cardData) { 
//     const arr=new Array(cardData.length)
//      for (let index = 0; index < cardData.length; index++) {
//         arr[index]=cardData[index].suit
//     }
    
//     return arr
//     }
//     console.log(getSuits(cardData))

 /**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/


// ================================================ 3 =============================================== //

// function getSuitCount(cardData) {
//     let arr={}
    
//     for (let index = 0; index < cardData.length; index++) {
//         if(cardData[index].suit in arr ){
//             arr[cardData[index].suit]=arr[cardData[index].suit]+1
//         }
//         else{
//            arr[cardData[index].suit]=cardData[index].suit
//            arr[cardData[index].suit]=1
//         }
//     }
  
// return arr
// }
// const arr1=getSuitCount(cardData)
// console.log(arr1)

/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/

// ================================================= 4 ============================================== //

function getSuitValues(cardData) {
    let arr={}
    
    for (let index = 0; index < cardData.length; index++) {
        if(cardData[index].suit in arr ){
            arr[cardData[index].suit].push(cardData[index].value)
        }
        else{
           arr[cardData[index].suit]=cardData[index].suit
           arr[cardData[index].suit]=[1]
        }
    }
  
return arr
}

const getSuitValue=getSuitValues(cardData)
console.log(getSuitValue)

/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/




