$(function(){
    $(".hov_ani")
    .on("mouseover", function(){
        $(this).attr("src", $(this).data("animated"));
})
.on("mouseout", function(){
        $(this).attr("src", $(this).data("static"));
});
});