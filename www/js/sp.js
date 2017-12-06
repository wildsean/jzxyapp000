window.onload =function(){
  var Ww=document.documentElement.clientWidth;
  console.log(Ww);
  var scale=Ww/640;
  document.getElementsByTagName('html')[0].style.fontSize = scale*100+'px';
// mbnfk
}
