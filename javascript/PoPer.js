
let allSvg = document.querySelectorAll(".svg");

let lengthSvg = (allSvg.length * 2) // 8

let arr = Array.from(Array(lengthSvg).keys());

function svgOne(first, secound){
    allSvg[0].style.top = `${first}%`
    allSvg[0].style.left = `${secound}%`
}
function svgTwo(first, secound){
    allSvg[1].style.top = `${first}%`
    allSvg[1].style.left = `${secound}%`
}
function svgThree(first, secound){
    allSvg[2].style.top = `${first}%`
    allSvg[2].style.left = `${secound}%`
}
function svgFour(first, secound){
    allSvg[3].style.top = `${first}%`
    allSvg[3].style.left = `${secound}%`
}

window.setInterval(() => {
    for ( i = 0; i < arr.length; i++ ){
        let rand = Math.floor(Math.random() * 65);
    
        arr[i] = rand;
    }
    
    svgOne(arr[0], arr[1])
    svgTwo(arr[2], arr[3])
    svgThree(arr[4], arr[5])
    svgFour(arr[6], arr[7])
}, 1000)
