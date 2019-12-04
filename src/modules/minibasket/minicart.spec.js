window.$ = require('jquery/dist/jquery.min');

describe('Minicart', function () {
    document.body.innerHTML = '<div id="miniCartLayer"></div>';
    document.body.innerHTML += '<div class="miniCart"><span class="count" /></div>';

    var cart = require('../Minicart');

    describe('setMiniCartCount', function () {

        it('should display count in miniCart block', function () {
            cart.setMiniCartCount(3);

            expect($('.miniCart .count').html()).toBe('<span>(</span>3<span>)</span>');
        });

        it('should set needRefresh flag to true after count update', function () {
            cart.setMiniCartCount(3);

            expect($('#miniCartLayer').data('needRefresh')).toBe(true);
        });

    });
});
