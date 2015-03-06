$(document).ready(function() {
    $(".box2 .special").hover(function() {

            $(".overlay2").delay(50).animate({
                top: '0px',
                opacity: '0.6'
            }, 300);

            $(this).parent().animate({
                backgroundSize: '215%'
            }, {
                easing: 'linear',
                duration: 400
            });
            $(".caption").delay(200).animate({
                top: '93px',
                opacity: '0.9',
                fontSize: '35px',
                left: '-=8px'
            }, 300);
            $(".word").delay(550).slideDown(200);
            $(".diduan").delay(400).animate({
                top: '182px'
            }, 200);


        },
        function() {

            $(".overlay2").animate({
                top: '-250px',
                opacity: '0'
            }, 300);
            $(this).parent().animate({
                backgroundSize: '200%'
            }, 400);
            $(".caption").delay(50).animate({
                top: '70px',
                opacity: '1',
                fontSize: '30px',
                left: '+=8px'
            }, 300);
            $(".word").delay(100).slideUp(200);
            $(".diduan").delay(300).animate({
                top: '240px'
            }, 200);

        });
    // body...
});
