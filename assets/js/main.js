//onload要執行的程式
window.onload=function() {
    //realTime();   
}


//nav動態固定在最上面
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 220) {
            $('.dropDowns').addClass('navFixed');
        } else {
            $('.dropDowns').removeClass('navFixed');
        }
    });
});


//現在時間

function realTime() {
    var now = new Date();
    document.getElementById("timer").innerHTML = ("現在時間："+now.getHours()).toString() + ":" + now.getMinutes().toString() +
        ":" + now.getSeconds().toString();
    window.setInterval("realTime()", 1000);
}


