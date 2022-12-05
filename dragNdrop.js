//=======================================================
let draggingCard = null;
let dragOverBox = null; //드래깅 객체가 방문 중인 객체
let dragOverCard = null; //드레깅 카드가 방문중인 카드
//=======================================================
//EVENT HANDLER
//=======================================================
function onDragStartCard(ev) {
    draggingCard = this; //드래깅 중인 객체로 자신을 연결
    this.classList.add("draggingCard");
}

function onDragEndCard(ev) {
    draggingCard = null;
    this.classList.remove("draggingCard");
    //dragIver가 발생한 카드 위에서 drop이 발생 했다면....
    if(dragOverCard) {
        dragOverCard.classList.remove("overCard")
        dragOverCard = null;
    }
}

function onDragOverCard(ev) {
    dragOverCard = this;
    this.classList.add("overCard");
}

function onDragLeaveCard(ev) {
    dragOverCard = null;
    this.classList.remove("overCard")
}

function onDragOverBox(ev) {
    ev.preventDefault(); //브라우저가 기본적으로 배제하는 코드를 배제
    this.classList.add("overBox");
    dragOverBox = this;
}

function onDragLeaveBox(ev) {
    ev.preventDefault();
    this.classList.remove("overBox")    
}

function onDropBox(ev) {
    this.appendChild(draggingCard)
    this.classList.remove("overBox");
}


//=======================================================
//=======================================================
window.onload = function() {
    //card 객체에 event handler를 연결한다.
    let cards = document.querySelectorAll(".card")
    for(let card of cards) {
        card.addEventListener("dragstart", onDragStartCard);
        card.addEventListener("dragend", onDragEndCard);
        card.addEventListener("dragover", onDragOverCard);
        card.addEventListener("dragleave", onDragLeaveCard);
    }

    //box 객체에 event handler를 연결한다
    let boxes = document.querySelectorAll(".box");
    for(let box of boxes) {
        box.addEventListener("dragover", onDragOverBox);
        box.addEventListener("dragleave", onDragLeaveBox);
        box.addEventListener("drop", onDropBox);
    }
}