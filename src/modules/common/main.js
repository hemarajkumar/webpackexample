var loadCommonFunction = function() {
    document.addEventListener('click', function(e) {
        if ($(e.target).data('toggle') !== 'popover'
        && $(e.target).parents('.popover.in').length === 0) { 
            $('[data-toggle="popover"]').popover('hide');
        }
     }, false);
};

loadCommonFunction();