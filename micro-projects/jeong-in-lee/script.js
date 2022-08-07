$(document).ready(function(){
    var index;
    var text_index;
    $(".work-right").hide();
    
    $(".work").hover(function(){
        index = $(this).index();
        $(".work-right").hide(); // hide all the other descriptions
        $(".work-right").eq(index).show(); // only display this description
    },);

    // $(".name-description-text").hover(function(){
    //     // text_index = $(this).index();
    //     $('.name-description-text').css("font-weight", 'normal');
    //     $(this).css("font-weight", 'bold');
    //     // $('p').css("font-family", 'Helvetica');
    //     // $('p').eq(text_index).css("font-family", 'Lora');
    // })
});