const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', ()=>{
    // get random number between 0 - 3
    const random = getRandom();
    document.body.style.backgroundColor = colors[random]
    color.textContent = colors[random]
})
const cantidad = colors.length;
function getRandom(){
    return Math.floor(Math.random()*cantidad);
}