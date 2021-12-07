let cube = document.getElementById("cube");
let body = document.querySelector("body");
let faces = document.getElementsByClassName("face");
var condition = 1;

window.addEventListener("mousedown", function (e){
  const x = e.clientX;
  const y = e.clientY;

  window.addEventListener("mousemove", moveRotate);

  function moveRotate(e){
      cube.style.transform = `
      rotateX(${(y-e.clientY)/4}deg)
      rotateY(${(e.clientX-x)/4}deg)`;
      body.style.cursor = "grabbing";
  }

  window.addEventListener("mouseup", function(){
    window.removeEventListener("mousemove", moveRotate);
    body.style.cursor = "context-menu";
  });
});

if (condition<1){
  cube.addEventListener("dblclick", ()=>{
    window.removeEventListener("dblclick",openCube);
  });
}

window.addEventListener("dblclick", openCube);

function openCube(e){
  if (condition>0){
    condition = 0;
    cube.style.transform ="none";
    $(".face").css("opacity", "70%");
    document.getElementById("text").style.visibility = "visible";
    setTimeout(function(){
      document.getElementById("wrapper").style.perspective = "900px";
      document.getElementById("two").style.transform = " rotateX(90deg) translate3d(0, 7.5em, -3em)";
      document.getElementById("three").style.transform = " rotateY(90deg) translate3d(-7.5em, 0, -3em)";
      document.getElementById("four").style.transform = " rotateX(-90deg) translate3d(0, -7.5em, -3em)";
      document.getElementById("five").style.transform = " rotateY(90deg) translate3d(7.5em, 0, 3em)";
    }, 150);
  }
  else{
    condition=1;
    cube.style.transform= "none";
    // $(".face").css("opacity", "100%");
    setTimeout(function(){
      document.getElementById("text").style.visibility = "hidden";
      $(".face").css("opacity", "100%");
      document.getElementById("wrapper").style.perspective = "900px";
      document.getElementById("two").style.transform = " rotateX(90deg) translate3d(0, 7.5em, 0)";
      document.getElementById("three").style.transform = " rotateY(90deg) translate3d(-7.5em, 0, 0)";
      document.getElementById("four").style.transform = " rotateX(-90deg) translate3d(0, -7.5em, 0)";
      document.getElementById("five").style.transform = " rotateY(90deg) translate3d(7.5em, 0, 0)";
    }, 150);
  }
}
