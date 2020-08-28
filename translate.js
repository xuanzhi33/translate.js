/*transtale.js
by xuanzhi33
用法：
1.在引入本js前需先引入jQuery
2.本js用于为中文网页创建英文版本
3.请将本js在</body>前引入
4.格式：<element en="[英语内容]">[中文原文]</element>
如 <p en="helloworld">你好世界</p>
5.语言切换方式
自动切换：系统语言为英文时访问该页面将自动显示为英文。
手动切换：需在页面上添加class为transBtn的按钮，用户点击该按钮来切换语言。
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