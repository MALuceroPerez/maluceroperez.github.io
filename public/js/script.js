
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
        
        $('html, body').animate({
          scrollTop: targetTop - $('nav').outerHeight()
        }, scrollTime);
        return false;
      }
    }
  });


let ctx = document.getElementById('skills').getContext('2d');
Chart.defaults.global.defaultFontColor = 'white';
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',
    

    // The data for our dataset
    data: {
      labels: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Express', 'PHP', 'SQL'],
      datasets: [{
          label: 'Skills',
          backgroundColor: '#dc3545',
          borderColor: '#dc3545',
          data: [9, 8, 9, 8, 7, 7, 6], 
      }]
  },

    // Configuration options go here
    options: {
      scales: {
        xAxes: [{
            ticks: {
                beginAtZero: true,
                suggestedMax: 10,
            }
        }]
    }
    }
});
