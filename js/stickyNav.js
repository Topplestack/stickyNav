(function ($) {

    $.fn.stickyNav = function (options) {
        var $this = this;
        var settings = $.extend({
            'startOffset': 0, // Modify when the element becomes fixed in relation to the window top
            'offsetElement': $this, // The element that determines when the scroll function engages
            'classChange': 'stuck' // Change the class that is assigned when the function engages
        }, options);
        // 
        var modOffset = settings.offsetElement.offset().top - settings.startOffset;
        $(window).scroll(function () {
            // Check to see if 
            if ($(window).scrollTop() > modOffset) {
                $this.addClass(settings.classChange); // Add the 'stuck' class
            } 
            else if ($(window).scrollTop() <= modOffset && $this.hasClass(settings.classChange)) { 
                $this.removeClass(settings.classChange); // Remove the 'stuck' class
            }
        });
        return $this.each(function () {
            // console.log(); // Use this for testing changes without breaking functionality
        });
    };

})(jQuery);
