$(function() {
    $('.route__info-button').on('click', function(e) {
        e.preventDefault();
        eId = e.target.id;
        eClass = '.' + eId;
        $(eClass).addClass('is-active');
        // $('.route__info-items').addClass('is-active');
    });
    $('.route__info-items-button').on('click', function() {
        $('.route__info-items').removeClass('is-active');
    });

    $("input.bron-step-two__product-value__input").inputSpinner();
});

$(function() {
    $('.hero__button').magnificPopup({});
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'showImageNumberLabel': false,
        'disableScrolling': true,
        'positionFromTop': 150,
    })
});