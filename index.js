function mouseon(event) {
    

  };
      
    

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5)
}

//----------------------함수 선언 ------------------------------


window.onload = function () {
  
  let engcontent = ['this is a pencil', 'hi my name is gyungmin'];
  let koreancontent = ['안녕하세요 저는 전경민이에요.', '만나서 반가와 너는 어디 사니?']
  //게임 시작 버튼 클릭시 이벤트 -----------------------------------------------------------
  document.getElementById("btnstart").onclick = function () {
    let content = document.getElementById("content")

    korean1 = koreancontent[0].split("")
    eng1 = engcontent[0].split(" "); //배열에 있는값이 공백을 기준으로 잘라서 eng1변수에 넣음  
    shuffleArray(eng1)
    shuffleArray(korean1)
    for (i = 0; i < eng1.length; i++) {
      let newDiv = document.createElement('div');
      let newText = document.createTextNode(eng1[i]) //div안에 들어갈 text 지정
      newDiv.setAttribute("id", "newDiv") //새로 만들어진 div의 id값 부여
      newDiv.draggable = "true";
      newDiv.appendChild(newText)
      document.body.appendChild(newDiv);
    
    newDiv.onmousedown = function() { 
    newDiv.style.position = 'absolute';
    newDiv.style.zIndex = 1000;

    document.body.append(newDiv);

    function moveAt(pageX, pageY) {
      newDiv.style.left = pageX - newDiv.offsetWidth / 2 + 'px';
      newDiv.style.top = pageY - newDiv.offsetHeight / 2 + 'px';
    }

    // 포인터 아래로 공을 이동시킵니다.
    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    // (2) mousemove로 공을 움직입니다.
    document.addEventListener('mousemove', onMouseMove);

    // (3) 공을 드롭하고, 불필요한 핸들러를 제거합니다.
    newDiv.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      newDiv.onmouseup = null;
    };

    newDiv.ondragstart = function () {
      return false;
    };
    }
    
  
     
  }
  
  
  //게임 시작 버튼 클릭시 이벤트 -----------------------------------------------------------    
 
  








}


}


