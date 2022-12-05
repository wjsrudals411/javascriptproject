$(document).ready(function () {
    $("#btnoff").click(function() {
        $("li").slideUp()
    })    
    $("#btnon").click(function() {
        $("li").slideDown()
    })    
    
    $("#btntoggle").click(function() {
        $("li").slideToggle()
    })

    $("#moverightbox").click(function() {
        $("div").animate({
            left : "+=50px"
        
        } )
    })

    $("#moveleftbox").click(function() {
        $("div").animate({
            left : "-=50px"
           ,top: "+=50px" 
        } )
    })
})