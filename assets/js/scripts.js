//Navbar logic
$(function() {
    $(".hamburger").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fa fa-bars fa-lg'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times fa-2x'></i>");
        }
    });
})