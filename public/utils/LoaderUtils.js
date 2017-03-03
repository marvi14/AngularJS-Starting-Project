define(['jquery'], function($) {
    window.showLoader = function(options) {
        if (options)
            $('body').loader('show', options);
        else
            $('body').loader('show', {
                text: ''
            });
    }
    window.hideLoader = function() {
        $('body').loader('hide');
    }
});