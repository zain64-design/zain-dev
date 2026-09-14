/******************************* navlink active ******************************/
$(document).ready(function(){
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
$(".nav-link.custom_navlink").removeClass("active");
$(`.nav-link.custom_navlink[href="${filename}"]`).addClass("active")
})

.on('initialized.owl.carousel changed.owl.carousel', function(e) {
    var carousel = e.relatedTarget;
    $('#slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
})


/******************************* sticky scroll ******************************/
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    // console.log(scroll);
    if (scroll >= 5300 && scroll <= 9400) {
       $(".program-steps-sticky").addClass("stuck");
    }else{
        $(".program-steps-sticky").removeClass("stuck");
    }
});
