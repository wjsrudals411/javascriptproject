let dragend = null;
let dragOverBox = null;
function onDragStart(ev) {
  dragend = this;
}
function onDragOver(ev) {
 ev.preventDefault();
}
function onDrop(ev) {
  ev.preventDefault();
  this.appendChild(dragend);
}
function onDragOverBox(ev) {
  ev.preventDefault();
  dragOverBox = this;
}

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5)
}
//----------------------함수 선언 ------------------------------


window.onload = function() {
let engcontent = ['this is a pencil', 'hi my name is gyungmin' ];
let koreancontent = ['안녕하세요 저는 전경민이에요.', '만나서 반가와 너는 어디 사니?']
//게임 시작 버튼 클릭시 이벤트 -----------------------------------------------------------
  document.getElementById("btnstart").onclick = function() {
  let content = document.getElementById("content")
  
  korean1 = koreancontent[0].split("")
  eng1 = engcontent[0].split(" "); //배열에 있는값이 공백을 기준으로 잘라서 eng1변수에 넣음  
  shuffleArray(eng1)
  shuffleArray(korean1)         
  for (i=0; i<eng1.length; i++) {         
  let newDiv = document.createElement('div');
  let newText = document.createTextNode(eng1[i]) //div안에 들어갈 text 지정
  newDiv.setAttribute("id", "newDiv") //새로 만들어진 div의 id값 부여
  newDiv.draggable="true";
  newDiv.appendChild(newText);
  document.getElementById("container").appendChild(newDiv) 
  document.body.appendChild(container);    
  let contents = document.querySelectorAll("#newDiv")
  for(let item of contents) {
  item.addEventListener("dragstart", onDragStart);
  item.addEventListener("dragover", onDragOver);
}
let contain = document.querySelectorAll("#container");
for(let item of contain) {
  item.addEventListener("dragover",onDragOverBox);
  item.addEventListener("drop", onDrop); 

}

        }
      }
//게임 시작 버튼 클릭시 이벤트 -----------------------------------------------------------    
// 드래그앤 드롭-----------------------------------------------------------








    
    }




// 드래그앤 드롭-----------------------------------------------------------
