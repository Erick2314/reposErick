function holaMundo(){
    alert('hola mundo')
}
function boton2() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // Dibujar la línea en el canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(400, 400);
    ctx.stroke();
}

function boton3() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // Dibujar la línea en el canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    ctx.beginPath();
    ctx.moveTo(400, 0);
    ctx.lineTo(0, 400);
    ctx.stroke();
}

function boton4() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // Dibujar la línea en el canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 400);
    ctx.stroke();
}

function boton5() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // Dibujar la línea en el canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(400, 200);
    ctx.stroke();
}

function eliminar(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 400, 400);
}