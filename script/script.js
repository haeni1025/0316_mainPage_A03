$(function () {

    /* GNB 메뉴 시작 */
 $("#mainMenu>li").mouseover(function () {
        $(".subMenu").stop().fadeIn(1000);
    });
    $("#mainMenu>li").mouseout(function () {
        $(".subMenu").stop().fadeOut(1000);
    });
    /* GNB 메뉴 끝 */


    /* 슬라이드쇼 시작 */
     setInterval(fnSlide, 3000);
    function fnSlide() {

        $("#slideshow #shuttleFrame a").fadeOut(500);
        $("#slideshow #shuttleFrame a:nth-child(2)").fadeIn(
            1000,
            function() {
                $("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child");
            }
        );
    }
    /* 슬라이드쇼 끝 */


 /* 멀티탭 시작 */
    $("button:nth-child(1)").click(function () {

        $("button.tab").css({
            "border": "none",
            "top": "0px"
        });

        $(this).css({
            "border": "1px solid #aaa",
            "border-bottom": "none",
            "top": "1px"
        });

        $("div#tabContent1").css({"display": "block"});
        $("div#tabContent2").css({"display": "none"});

    });

    $("button:nth-child(2)").click(function () {

        $("button.tab").css({
            "border": "none",
            "top": "0px"
        });

        $(this).css({
            "border": "1px solid #aaa",
            "border-bottom": "none",
            "top": "1px"
        });

        $("div#tabContent1").css({"display": "none"});
        $("div#tabContent2").css({"display": "block"});

    });
/* 멀티탭 끝 */



    /* 레이어팝업 시작 */
    $(".layerPoint").click(function() {
        $("#layerBG").css({"display": "block"});
    });
    $("#closeBtn").click(function() {
        $("#layerBG").css({"display": "none"});
    });

    /* 레이어팝업 끝 */


});
