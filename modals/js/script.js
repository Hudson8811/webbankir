

$('.str_loan .for_show .show').click(function(e){
    $('.str_loan .for_show .show .www').toggleClass('act');
    $('.str_loan .hide_block').slideToggle();
});
$('.str_loan .for_show2 .show').click(function(e){
    $('.str_loan .for_show2 .show .www').toggleClass('act');
    $('.str_loan .hide_block2').slideToggle();
});

$('.mobile_open .garmon .for_open').click(function(e){
    $(this).toggleClass('act');
    $(this).parent().find('.vniz').slideToggle();
});

$(".polzunok-3").slider({
    min: 0,
    max: 99,
    value: 12,
    range: "min",
    animate: "fast",
    slide : function(event, ui) {    
        var opt = $(".polzunok-3").data().uiSlider.options;
        if ((ui.value - opt.min) > (opt.max - opt.min)/2) {
            $(".polzunok-3 b").addClass("polzunok-text-left-3").removeClass("polzunok-text-right-3");    
            } else {
            $(".polzunok-3 b").addClass("polzunok-text-right-3").removeClass("polzunok-text-left-3");  
			
        }
        $(".polzunok-3 span").text("+ " + ui.value); 
    }
});
$(".polzunok-3 b").addClass("polzunok-text-left-3");    
$(".polzunok-3").before("<div class='polzunok-bg-3'></div>");
$(".polzunok-3 span").text("+ " + $(".polzunok-3").slider("value"));  

$(".polzunok-4").slider({
    min: 0,
    max: 50,
    value: 12,
    range: "min",
    animate: "fast",
    slide : function(event, ui) {    
        var opt = $(".polzunok-3").data().uiSlider.options;
        if ((ui.value - opt.min) > (opt.max - opt.min)/2) {
            $(".polzunok-4 b").addClass("polzunok-text-left-4").removeClass("polzunok-text-right-4");    
            } else {
            $(".polzunok-4 b").addClass("polzunok-text-right-4").removeClass("polzunok-text-left-4");  
			
        }
        $(".polzunok-4 span").text("+ " + ui.value); 
    }
});
$(".polzunok-4 b").addClass("polzunok-text-left-4");    
$(".polzunok-4").before("<div class='polzunok-bg-4'></div>");
$(".polzunok-4 span").text("+ " + $(".polzunok-4").slider("value"));  

$(".polzunok-5").slider({
    min: 0,
    max: 24,
    value: 12,
    range: "min",
    animate: "fast",
    slide : function(event, ui) {    
        var opt = $(".polzunok-5").data().uiSlider.options;
        if ((ui.value - opt.min) > (opt.max - opt.min)/2) {
            $(".polzunok-5 b").addClass("polzunok-text-left-5").removeClass("polzunok-text-right-5");    
            } else {
            $(".polzunok-5 b").addClass("polzunok-text-right-5").removeClass("polzunok-text-left-5");  
			
        }
        $(".polzunok-5 span").text( ui.value); 
    }
});
$(".polzunok-5 b").addClass("polzunok-text-left-5");    
$(".polzunok-5").before("<div class='polzunok-bg-5'></div>");
$(".polzunok-5 span").text( $(".polzunok-5").slider("value"));  

$(".polzunok-6").slider({
    min: 3,
    max: 30,
    value: 12,
    range: "min",
    animate: "fast",
    slide : function(event, ui) {    
        var opt = $(".polzunok-6").data().uiSlider.options;
        if ((ui.value - opt.min) > (opt.max - opt.min)/2) {
            $(".polzunok-6 b").addClass("polzunok-text-left-6").removeClass("polzunok-text-right-6");    
            } else {
            $(".polzunok-6 b").addClass("polzunok-text-right-6").removeClass("polzunok-text-left-6");  
			
        }
        $(".polzunok-6 span").text( ui.value); 
    }
});
$(".polzunok-6 b").addClass("polzunok-text-left-6");    
$(".polzunok-6").before("<div class='polzunok-bg-6'></div>");
$(".polzunok-6 span").text( $(".polzunok-6").slider("value"));  

$('.user_block').click(function(e){
    $(this).toggleClass('active');
});

$('.modal_wrapper .modal_close').click(function(e){
    $(this).closest('.modal_wrapper').removeClass('active');
});

$('.modal_block .attention_block .del_attention_block').click(function(e){
    $(this).parent().slideUp();
});

$('.modal_block .shad .cloz').click(function(e){
    $(this).parent().slideUp();
});

$(document).ready(function() {
      $('.select').niceSelect();      
});

$(".mask1").mask("999 999-9999");

$('.modal1_button').click(function(e){
    $('.modal1').toggleClass('active');
});

$('.modal2_button').click(function(e){
    $('.modal2').toggleClass('active');
});

$('.modal3_button').click(function(e){
    $('.modal3').toggleClass('active');
});

$('.modal4_button').click(function(e){
    $('.modal4').toggleClass('active');
});

$('.modal5_button').click(function(e){
    $('.modal5').toggleClass('active');
});

$('.modal6_button').click(function(e){
    $('.modal6').toggleClass('active');
});

$('.modal7_button').click(function(e){
    $('.modal7').toggleClass('active');
});

$('.modal8_button').click(function(e){
    $('.modal8').toggleClass('active');
});

$('.modal9_button').click(function(e){
    $('.modal9').toggleClass('active');
});

$('.modal10_button').click(function(e){
    $('.modal10').toggleClass('active');
});

$('.modal11_button').click(function(e){
    $('.modal11').toggleClass('active');
});

$('.modal12_button').click(function(e){
    $('.modal12').toggleClass('active');
});

$('.modal122_button').click(function(e){
    $('.modal122').toggleClass('active');
});

$('.modal1222_button').click(function(e){
    $('.modal1222').toggleClass('active');
});

$('.modal13_button').click(function(e){
    $('.modal13').toggleClass('active');
});

$('.modal14_button').click(function(e){
    $('.modal14').toggleClass('active');
});

$('.modal15_button').click(function(e){
    $('.modal15').toggleClass('active');
});

$('.modal16_button').click(function(e){
    $('.modal16').toggleClass('active');
});

$('.modal17_button').click(function(e){
    $('.modal17').toggleClass('active');
});

$('.modal18_button').click(function(e){
    $('.modal18').toggleClass('active');
});

$('.modal19_button').click(function(e){
    $('.modal19').toggleClass('active');
});

$('.modal20_button').click(function(e){
    $('.modal20').toggleClass('active');
});

$('.modal21_button').click(function(e){
    $('.modal21').toggleClass('active');
});

$('.modal22_button').click(function(e){
    $('.modal22').toggleClass('active');
});

$('.modal23_button').click(function(e){
    $('.modal23').toggleClass('active');
});

$('.modal24_button').click(function(e){
    $('.modal24').toggleClass('active');
});

$('.modal25_button').click(function(e){
    $('.modal25').toggleClass('active');
});

$('.modal26_button').click(function(e){
    $('.modal26').toggleClass('active');
});

$('.modal27_button').click(function(e){
    $('.modal27').toggleClass('active');
});

$('.modal28_button').click(function(e){
    $('.modal28').toggleClass('active');
});

$('.modal29_button').click(function(e){
    $('.modal29').toggleClass('active');
});

$('.modal30_button').click(function(e){
    $('.modal30').toggleClass('active');
});

$('.modal31_button').click(function(e){
    $('.modal31').toggleClass('active');
});

$('.modal32_button').click(function(e){
    $('.modal32').toggleClass('active');
});

$('.modal33_button').click(function(e){
    $('.modal33').toggleClass('active');
});



$('.modal34_button').click(function(e){
    $('.modal34').toggleClass('active');
});

$('.modal35_button').click(function(e){
    $('.modal35').toggleClass('active');
});

$('.modal36_button').click(function(e){
    $('.modal36').toggleClass('active');
});

$('.modal37_button').click(function(e){
    $('.modal37').toggleClass('active');
});

$('.modal38_button').click(function(e){
    $('.modal38').toggleClass('active');
});

$('.modal39_button').click(function(e){
    $('.modal39').toggleClass('active');
});

$('.modal40_button').click(function(e){
    $('.modal40').toggleClass('active');
});

$('.modal41_button').click(function(e){
    $('.modal41').toggleClass('active');
});

$('.modal42_button').click(function(e){
    $('.modal42').toggleClass('active');
});

$('.modal2 .but').click(function(e){
    $('.modal2').removeClass('active');
    $('.modal1').addClass('active');
});


$('.modal_wrapper_container2 .vspl .cloos').click(function(){
	$('.modal_wrapper_container2 .vspl').slideUp();
});

