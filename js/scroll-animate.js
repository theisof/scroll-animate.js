// Generated by CoffeeScript 1.9.2
(function() {
  'strict';
  var $, ScrollAnimate;

  $ = jQuery;

  ScrollAnimate = (function() {
    function ScrollAnimate() {
      $(document).on('ready', (function(_this) {
        return function() {
          return _this.findElements();
        };
      })(this));
    }

    ScrollAnimate.prototype.findElements = function() {
      var self;
      self = this;
      this.elements = new Array();
      $('[data-scroll-animate]').each(function() {
        var $element;
        $element = $(this);
        return self.elements.push({
          '$element': $element,
          'loaded': false,
          'animation': $element.data('scroll-animate'),
          'offset': $element.offset().top
        });
      });
      if (this.elements.length) {
        this.animate();
        return this.intervalScroll();
      }
    };

    ScrollAnimate.prototype.animate = function() {
      var $element, allLoaded, index, options, queue, ref;
      queue = 0;
      allLoaded = true;
      ref = this.elements;
      for (index in ref) {
        options = ref[index];
        $element = options.$element;
        if (!options.loaded) {
          allLoaded = false;
          if (options.offset < $(window).scrollTop() + $(window).height()) {
            $element.data('animation', options.animation);
            $element.delay(queue * 750).queue(function() {
              var $this, animation;
              $this = $(this);
              animation = $this.data('animation');
              $this.css('visibility', 'visible');
              return $this.addClass(animation).dequeue();
            });
            options.loaded = true;
            queue++;
          }
        }
      }
      if (allLoaded) {
        return clearInterval(this.interval);
      }
    };

    ScrollAnimate.prototype.intervalScroll = function() {
      var savedPosition;
      savedPosition = 0;
      return this.interval = setInterval((function(_this) {
        return function() {
          if ($(window).scrollTop() - savedPosition > 100) {
            _this.animate();
            return savedPosition = $(window).scrollTop();
          } else if (savedPosition > $(window).scrollTop()) {
            return savedPosition = $(window).scrollTop();
          }
        };
      })(this), 500);
    };

    return ScrollAnimate;

  })();

  new ScrollAnimate();

}).call(this);
