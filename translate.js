/*
transtale.js
v1.1
by xuanzhi33
*/
function gc() {
    var name = "transLang=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
function sc(cvalue)
{
  var d = new Date();
  d.setTime(d.getTime()+(30*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = "transLang=" + cvalue + "; " + expires + "; path=/";
}
function tr(){
    $('[en]').each(function(){
        $(this).html($(this).attr("en"));
    })
}
if (((navigator.language!="zh-CN")||(gc("")=="en"))&&(gc("transLang")!="zh")){
    tr();
    $(".transBtn").text("切换语言");
}else{
    $(".transBtn").text("Switch language");
}
$(".transBtn").click(function(){
    if ($(".transBtn").text()=="Switch language"){
        tr();
        sc("en");
        $(".transBtn").text("切换语言");
    }else{
        sc("zh");
        location.reload();
    }
})