const currencyEl_one = document.querySelector("#currency-one")
const amountEl_one = document.querySelector("#amount-1")
const currencyEl_two = document.querySelector("#currency-two")
const amountEl_two = document.querySelector("#amount-2")

const swap = document.querySelector("#swap")
const rate = document.querySelector("#rate")


function calculate(){

const firstEl = currencyEl_one.value
const secondEl = currencyEl_two.value

// console.log(firstEl , secondEl)
const api = "a9d71e486b399fc8ae6b8b1b"
fetch(`https://v6.exchangerate-api.com/v6/${api}/latest/${firstEl}`).then(function (res) {
   return res.json()} ).then( function (data){

    // console.log(data)
  let curr = data.conversion_rates[secondEl] // this is object so passing index to it
  // console.log(curr)
  amountEl_two.value = (amountEl_one.value * curr).toFixed(2)


  rate.innerHTML  = `${amountEl_one.value} ${currencyEl_one.value} = ${amountEl_two.value} ${currencyEl_two.value} `
})

}



//event listners

currencyEl_one.addEventListener("change" , calculate)
amountEl_one.addEventListener("input" , calculate)
currencyEl_two.addEventListener("change" , calculate)
amountEl_two.addEventListener("input" , calculate)


swap.addEventListener("click" , function(){
  let temp = currencyEl_one.value
  currencyEl_one.value = currencyEl_two.value
  currencyEl_two.value =temp;

  calculate();
})

calculate()