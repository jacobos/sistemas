// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
<<<<<<< HEAD
            // depende del tino de navbar, si es fijo o no
            // ponemos un -50, -70 si es fijo y tenemos un padding en el body
            // o nada (si no esta fijo)
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
=======
            // depende del tipo de navbar, si es fijo o no
            // -70 si es fijo y tenemos un padding en el body
            // o nada (si no esta fijo)
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
>>>>>>> 94c7e9aa8ccc9b22c658ec82fd21399ff7c50183
