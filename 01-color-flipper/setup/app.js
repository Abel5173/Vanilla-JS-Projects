const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const btn2 = document.querySelector(".btn-hero")
btn.addEventListener("click", function(){
    //get random number between 0-3
    const randomNumber = getRandomNumber();
    console.log(getRandomNumber());
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}
// console.log(Math.random());