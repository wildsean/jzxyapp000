window.onload = function(){
  function scale(){
    var HTML = document.getElementsByTagName('html')[0];
    // console.log(HTML);
    var Ww = document.documentElement.clientWidth;//获取当前浏览器窗口的宽度
    // console.log(Ww);
    var sc = Ww/640;
    // console.log(sc);
    // document.body.style.zoom = sc;
    HTML.style.fontSize = sc*100 + 'px';
  }
  scale();
  window.onresize = function(){//当浏览器窗口大小改变后会立即出发下边内容
    scale();
  }


};
