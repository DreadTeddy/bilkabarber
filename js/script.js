$(function(){
    //hamburger menu click
    $('#nav_toggle').click(function(){
        $("#top-head").toggleClass('open');
        $("nav").slideToggle(500);
    });

    //menu link click
    $('nav a').click(function(){
        if(window.innerWidth <= 680){
            $("#top-head").toggleClass('open');
            $("nav").slideToggle(500);
        }
    });

    // Window resize event
    $(window).resize(function() {
        if(window.innerWidth > 680){
            $("nav").css("display", "block");  // 680px以上で常に表示
        } else {
            if(!$("#top-head").hasClass('open')){
                $("nav").css("display", "none"); // 680px以下で非表示
            }
        }
    });

    // ページ読み込み時の初期化処理（リロード時の表示リセット）
    if(window.innerWidth > 680){
        $("nav").css("display", "block");
    } else {
        $("nav").css("display", "none");
    }
});