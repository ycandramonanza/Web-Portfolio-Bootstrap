$('.page-scroll').on('click', function(e) {
   
    
    var attr = $(this).attr('href');
    var el   = $(attr);
   
    $('html , body').animate({
        scrollTop: el.offset().top - 50
    });

    e.preventDefault();
});