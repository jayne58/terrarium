dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
    }
    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}
document.getElementsByClassName('plant').addEventListener("mouseover", zoom);
function zoom() {
    var GFG1 = document.getElemenstByClassName('plant');
    var currWidth1 = GFG1.clientWidth;
    GFG1.style.width = (currWidth1 + 100) + "px";
}
document.getElementsByClassName('plant').addEventListener("click", zoomin);
function zoomin() {
    var GFG1 = document.getElementsByClassName('plant');
    var currWidth1 = GFG1.clientWidth;
 GFG1.style.width = (currWidth1 - 100) + "px";}

// document.getElementById('plant2').addEventListener("mouseover", zoom);
// function zoom() {
//     var GFG2 = document.getElementById('plant2');
//     var currWidth2 = GFG2.clientWidth;
//     GFG2.style.width = (currWidth2+ 100) + "px";
// }
// document.getElementById('plant2').addEventListener("click", zoomin);
// function zoomin() {
//     var GFG2 = document.getElementById('plant2');
//     var currWidth2 = GFG2.clientWidth;
//         GFG2.style.width = (currWidth2 - 100) + "px";}
// document.getElementById('plant3').addEventListener("mouseover", zoom3);
// function zoom3() {
//     var GFG3 = document.getElementById('plant3');
//     var currWidth3 = GFG3.clientWidth;
//     GFG3.style.width = (currWidth3 + 100) + "px";
// }
// document.getElementById('plant3').addEventListener("click", zoomin3);
// function zoomin3() {
//     var GFG3 = document.getElementById('plant3');
//     var currWidth3= GFG3.clientWidth;
//  GFG3.style.width = (currWidth3 - 100) + "px";}
//  document.getElementById('plant4').addEventListener("mouseover", zoom4);
// function zoom4() {
//     var GFG4 = document.getElementById('plant4');
//     var currWidth4 = GFG4.clientWidth;
//     GFG4.style.width = (currWidth4 + 100) + "px";
// }
// document.getElementById('plant4').addEventListener("click", zoomin4);
// function zoomin4() {
//     var GFG4 = document.getElementById('plant4');
//     var currWidth4= GFG4.clientWidth;
//  GFG4.style.width = (currWidth4- 100) + "px";}
  