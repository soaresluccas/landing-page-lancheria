window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var headerFixed = document.querySelector('.header_fixed');

    var headerHeight = header.offsetHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > headerHeight) {
        headerFixed.classList.add('fixed');
    } else {
        headerFixed.classList.remove('fixed');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("#nav_menu #links_fixed");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            
            
           
            links.forEach(function(link) {
                link.classList.remove("active_fixed");
            });

        
            this.classList.add("active_fixed");
        });
    });
});
