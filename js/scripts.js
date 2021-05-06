(function ($) {
    "use strict";

    $(window).on('load', function () {

        const preloaderFadeOutTime = 500;
        function hidePreloader() {
            const preloader = $('.spinner-wrapper');
            setTimeout(function () {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();

        const date = '2021-05-16';
        const hour = '08:00';
        const tzDate = moment.tz(`${date} ${hour}`, "America/Sao_Paulo");
        $("#date").html('Dia ' + moment(tzDate).format('DD/MM/Y'));
        $('#countdown').countdown(tzDate.toDate(), function (event) {
            $(this).html(event.strftime('<span class="turquoise">%D</span> dia%!D, <span class="turquoise">%H</span> hora%!H, <span class="turquoise">%M</span> minuto%!M e <span class="turquoise">%S</span> segundo%!S'));
        });

    });

})(jQuery);