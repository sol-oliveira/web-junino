function draw()
{
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(100,75);
    ctx.lineTo(125,100);
    ctx.lineTo(125,50;
    ctx.fill();
  }
}
window.addEventListener('keydown', KeyDown, true);
draw();