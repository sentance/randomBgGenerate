const board = document.querySelector('#board')

const COUNT_OF_SQURE = 500
const colors = ['#ffafbd', '#2193b0', '#cc2b5e', '#ee9ca7', '#42275a', '#bdc3c7', '#de6262', '#06beb6', '#a8e063', '#eecda3']

for (let i = 0; i < COUNT_OF_SQURE; i+=1) {
    const square = document.createElement('div')
    square.classList.add('square')

    board.append(square)

    square.addEventListener('mouseover', ()=>{
        changeBackgoundColor(square)
    })
    square.addEventListener('mouseout', ()=>{
        bgColorDefault(square)
    })
}

function changeBackgoundColor (element) {
    const elementIndex = Math.floor(Math.random() * colors.length)
    element.style.backgroundColor  = colors[elementIndex]
}
function bgColorDefault (element) {
    element.style.backgroundColor  = 'rgb(7, 0, 0)'
}