onload = function() {
  draw();
};
function draw() {
  var canvas = document.getElementById('sample');
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  var ctx = canvas.getContext('2d');
  var x1=0;
  var y1=-500*Math.sqrt(3);
  var x2=-500;
  var y2=0;
  var x3=500;
  var y3=0;
  var depth=6;
  ctx.beginPath();
  ctx.translate(500,1000);
function gasket(x1,y1,x2,y2,x3,y3,depth){
    if(depth > 0){
    var xx=x1;
    var yy=y1;
    ctx.moveTo(xx, yy);
    xx=x2;
    yy=y2;
    ctx.lineTo(xx, yy);
    xx=x3;
    yy=y3;
    ctx.lineTo(xx, yy);

    ctx.closePath();
    ctx.stroke();

    xx=(x1 + x2)/2;
    yy=(y1 + y2)/2;
    ctx.moveTo(xx, yy);
    xx=(x2 + x3)/2;
    yy=(y2 + y3)/2;
    ctx.lineTo(xx, yy);
    xx=(x1 + x3)/2;
    yy=(y1 + y3)/2;
    ctx.lineTo(xx, yy);
    xx=(x1 + x2)/2;
    yy=(y1 + y2)/2;
    ctx.lineTo(xx, yy);
    ctx.closePath();
    ctx.stroke();
    gasket(x1, y1, (x1+x2)/2, (y1+y2)/2, (x1+x3)/2, (y1+y3)/2, depth-1);
    gasket((x1+x2)/2, (y1+y2)/2, x2, y2, (x2+x3)/2, (y2+y3)/2, depth-1);
    gasket((x1+x3)/2, (y1+y3)/2, (x2+x3)/2, (y2+y3)/2, x3, y3, depth-1);
    }
  }




gasket(x1,y1,x2,y2,x3,y3,depth);


}