const dollarsText = document.querySelector(".dollars");

const priceRange = document.getElementById("priceRange");
const buyButton = document.getElementById("buyButton");

priceRange.addEventListener("input", (event) =>
  updatePrice(event.target.value)
);

const updatePrice = (priceInCents) => {
  // console.log(priceInCents)

  const dollars = Math.floor(priceInCents / 100).toString().padStart(2,'0')
  const cent = Math.floor(priceInCents % 100).toString().padStart(2,'0')

  return `${dollars}.${cent}`
 
}

buyButton.addEventListener("click", () => {
 const price =  updatePrice(priceRange.value)
  dollarsText.innerHTML = price
 
})
