$(document).ready(function(){
$('#przycisk').click(function(){
$("p").eq(0).before($("p").eq(4))
    });
    $('#odwrotne').click(function(){
        $("p").eq(4).after($("p").eq(0))
            });
});