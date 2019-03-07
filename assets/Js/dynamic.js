$(document).ready(function(){
        $(window).scroll(function(){
    
            /*navbar scroll affixs*/
            var navbar = $(".navbar");
            if($(window).scrollTop() >= navbar.height())
                navbar.addClass("scrolled");
            else
                navbar.removeClass("scrolled");
    });


    $("#header_button").mouseover(function(){
        $(this).css("transition","2s");
    });

    $("#sec-2 ul li").click(function(){
        $(".hidden").show();
        $(".active2").hide();
        $("#sec-1").removeClass('Onit');
        $("#sec-2").addClass('Onit');
    });

    $("#sec-1 ul li").click(function(){
        $(".active2").show();
        $(".hidden").hide();
        $("#sec-2").removeClass('Onit');
        $("#sec-1").addClass('Onit');
    });
    baguetteBox.run('.compact-gallery', { animation: 'slideIn'});
    
        $(document).on("focus" , "input" , function () {
        attr = $(this).attr("placeholder");
        $(this).removeAttr('placeholder');
    });

    $(document).on("focusout" , "input" , function () {
        if($(this).val() == ''){
            $(this).attr('placeholder' , attr);
        }
    });
    var navHeight = $('.navbar').outerHeight();
        $(".navbar ul li a").click(function(e) {
            e.preventDefault();
            var link = $(this).attr("href");
            $("html,body").animate({
                scrollTop: $(link).offset().top - navHeight
            },1000);
        });
});
