const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const left = document.querySelector('.left')
const right = document.querySelector('.right')
let container_width = null;
let currentNode = 0;

//슬라이드 실행
function slide(num) {
    container_width = container.clientWidth; 
    slider.style.left = -(num * container_width) + 'px';
} 

//왼쪽 버튼 클릭 시
function slideLeft() {
    if(currentNode === 0) { //처음일 때 넘어가지않음
        slide(currentNode);
    } else {
        slide(--currentNode);
    }
}
//오른쪽 버튼 클릭 시
function slideRight() {
    if(currentNode === 4) { //마지막일 때 넘어가지않음
        slide(currentNode);
    } else {
        slide(++currentNode);
    }
}

left.addEventListener('click', slideLeft);
right.addEventListener('click', slideRight);
