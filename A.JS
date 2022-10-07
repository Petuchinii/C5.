canvas= document.getElementById("lienzo");
ctx= canvas.getContext("2d");
color= "blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=6;
ctx.arc(167, 232, 35 ,0 , 2*Math.PI); ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //tomar el color desde la caja de entrada
    //comienzo de la actividad adicional
    color = document.getElementById("color").value;
    console.log(color);
    //fin de la actividad adicional
	
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}
function circle(mouse_x, mouse_y) {
    color= "blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=6;
ctx.arc(mouse_x, mouse_y, 35 ,0 , 2*Math.PI); ctx.stroke();
}