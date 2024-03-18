/*
transtale.js
v1.2
by xuanzhi33
*/
window.TranslateJS = (function () {
    function getTransCookie() {
        var name = "transLang=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    function setCookie(cvalue) {
        var d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = "transLang=" + cvalue + "; " + expires + "; path=/";
    }
    function translate() {
        $('[en]').each(function () {
            $(this).html($(this).attr("en"));
        })
    }
    if (((navigator.language != "zh-CN") || (getTransCookie() == "en")) && (getTransCookie() != "zh")) {
        translate();
        $(".transBtn").text("切换语言");
    } else {
        $(".transBtn").text("Switch language");
    }
    $(".transBtn").click(function () {
        if ($(".transBtn").text() == "Switch language") {
            translate();
            setCookie("en");
            $(".transBtn").text("切换语言");
        } else {
            setCookie("zh");
            location.reload();
        }
    })
    return {
        translate: translate
    }
})();