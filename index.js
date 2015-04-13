/**
 * Created by DL.Peterson02 on 4/9/2015.
 */





$(function() {
    $('.alert button').on('click', function(){
        $('.alert').animate({
            opacity: 0,
            height: 0,
            margin: 0
        },function(){
            $(this).remove();
        })
    })
});