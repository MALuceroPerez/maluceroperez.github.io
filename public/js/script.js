 //Smooth Scrolling
 $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length ? $target : $('[name=' + this.hash.slice(1) +']');

      if ($target.length) {
        var baseMinScrollTime = 200,
            baseMaxScrollTime = 500;

        var docHeight = $(document).height(),
            triggerTop = $(this).offset().top,
            targetTop = $target.offset().top;

        var scrollProportion = (targetTop - triggerTop) / docHeight,
            relativeTime = ((baseMaxScrollTime - baseMinScrollTime) * scrollProportion) + baseMinScrollTime,
            // Create inverse relationship (quicker the further we scroll)
            scrollTime = -1 * (1 - relativeTime);
        
       //Scroll stop now accounts margin and padding of sticky nav
        $('html, body').animate({
          scrollTop: targetTop - $('nav').outerHeight()
        }, scrollTime);
        return false;
      }
    }
  });
