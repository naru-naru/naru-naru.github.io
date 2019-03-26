
$(function(){

if($('#cvs').length){
var container = document.getElementById("container");
var canvas = document.getElementById("cvs");
var ctx = canvas.getContext("2d");
var aryImg = [];  // 画像の情報を格納
// console.log(container);
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;
var cvsw = canvas.width;   // canvasタグに指定したwidth
var cvsh = canvas.height;   // canvasタグに指定したheight
var imgCnt = 50;
var imgBaseSizeW = 30;    // 画像の基本サイズ横幅
var imgBaseSizeH = 30;  // 画像の基本サイズ立幅
var angleAdd =1/180*Math.PI;
var vectorX = 0;
var vectorY = 0;
var id;
var time =0;


// 画像の読み込み
var img = new Image();
img.src = "./images/sakura.png";
img.onload = flow_start;





function setImages(){
  for(var i = 0;i < imgCnt;i++){
    var degree = Math.random()*Math.PI;
    var zoom = Math.sin(degree);

    aryImg.push({
      "posx": Math.random() * cvsw,     // 初期表示位置x
      "posy": Math.random() * cvsh,     // 初期表示位置y
      "sizew": imgBaseSizeW/2 * zoom + imgBaseSizeW,          // 画像の横幅
      "sizeh": imgBaseSizeH/2 * zoom + imgBaseSizeH,          // 画像の縦幅
      "vertical": 1,
      "horizontal": 0.5,
      "angle": Math.random()*Math.PI,
    });
  }
}
 
// 描画、パラメーターの更新
var idx = 0;
var cos = 1;
var sin = 0;


var vectorCont =function(){
  vectorX = Math.sin(time/180*Math.PI);
  if(vectorX < 0)
    vectorX *= -1;
  time++;
};

function flow(){

  var resize = $(window).on('load resize', function(){
    var scale = 0;
    //再描画のため必ずCanvasの描画領域をクリアする
    ctx.clearRect(0, 0, cvsw, cvsh);
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    cvsw = canvas.width;
    cvsh = canvas.height;
    scale = canvas.width / img.width;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);


    for(idx = 0;idx < imgCnt;idx++){
    aryImg[idx].posy += 1.5*aryImg[idx].vertical;
    aryImg[idx].posx += 1.5*aryImg[idx].horizontal + 2*vectorX;
    aryImg[idx].angle += Math.random()*angleAdd;
    cos = Math.cos(aryImg[idx].angle);
    sin = Math.sin(aryImg[idx].angle);
    ctx.setTransform(cos, sin, sin, cos, aryImg[idx].posx, aryImg[idx].posy);
    ctx.drawImage(img, 0, 0, aryImg[idx].sizew , aryImg[idx].sizeh);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // 範囲外に描画された画像を戻す
    if(aryImg[idx].posy >= cvsh){
      aryImg[idx].posy = -aryImg[idx].sizeh;
    }
    else if(aryImg[idx].posx >= cvsw){
      aryImg[idx].posx = -aryImg[idx].sizew;
    }
    // console.log(cvsw);
  }
  setImages();
  });

  ctx.clearRect(0,0,cvsw,cvsh);
  for(idx = 0;idx < imgCnt;idx++){
    aryImg[idx].posy += 1.5*aryImg[idx].vertical;
    aryImg[idx].posx += 1.5*aryImg[idx].horizontal + 2*vectorX;
    aryImg[idx].angle += Math.random()*angleAdd;
    cos = Math.cos(aryImg[idx].angle);
    sin = Math.sin(aryImg[idx].angle);
    ctx.setTransform(cos, sin, sin, cos, aryImg[idx].posx, aryImg[idx].posy);
    ctx.drawImage(img, 0, 0, aryImg[idx].sizew , aryImg[idx].sizeh);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // 範囲外に描画された画像を戻す
    if(aryImg[idx].posy >= cvsh){
      aryImg[idx].posy = -aryImg[idx].sizeh;
    }
    else if(aryImg[idx].posx >= cvsw){
      aryImg[idx].posx = -aryImg[idx].sizew;
    }
    // console.log(cvsw);
  }
}






function flow_start(){
  setImages();
  setInterval(vectorCont, 200);
  setInterval(flow,10);
}

}else{console.log("It is not a top page")}
});

