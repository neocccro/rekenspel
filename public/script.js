const socket = io.connect();
const button = document.getElementsByClassName('button')[0];
const input = document.getElementsByClassName('input')[0];
const chat = document.getElementsByClassName('chat');//1 - 6

button.addEventListener("click",()=>{
  socket.emit("client",input.value);
  input.value = "";
});

input.addEventListener("keydown",(koffie)=>{
  if(koffie.keyCode == 13)
  {
    socket.emit("client",input.value);
    input.value = "";
  }
});



socket.on("server",(data)=>{
  console.log(data);
  for (var i = 6; i > 1; i--){
    chat[i].innerHTML = chat[i-1].innerHTML;
  }
  chat[1].innerHTML = data;
});

console.log("iets");
