// let user = prompt("biror so'z kiriting")

// for(let i = 0; i < daryo.length; i++){
//   if(daryo[i].title.toLowerCase().includes(user.toLowerCase())){
//     console.log(daryo[i])
//   }
// }


// let user = prompt("So'z kiriting")

// for(let i = 0; i<daryo.length; i++){
//   if(daryo[i].categories.toLowerCase().includes(user.toLowerCase())){
//      daryo.splice(i,1)
//     }
// }

// console.log(daryo)

function search(params){
  for (let i = 0; i<=daryo.length - 1; i++){
    if(daryo[i].categories.toLowerCase().includes(params.value.toLowerCase())){
    }
  }
}

function uchirish(){}