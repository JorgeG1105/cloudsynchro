$(function() {

    //Hamburger Icon and Navbar logic
    $(".hamburger").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fa fa-bars fa-lg'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times fa-2x'></i>");
        }
    });
    //Faq Card logic
    $('.faq-card').on('click', function() {
        //If faq-card-info-p has a class of "no display" then this var will have a value of "up" otherwise, "down".
        var up_or_down = $(".faq-card-info-p", this).hasClass("no-display") ? 'up' : 'down';
        //insert the value of var up_or_down into the chevdown elements HTML
        $(".chev-down", this).html('<i class="fas fa-chevron-' + up_or_down + '" />');
        //Toggle the class no-display on the .faq-card-info-p which will now show the text and hide it again if clicked again.
        $(".faq-card-info-p", this).toggleClass("no-display");
   });
});