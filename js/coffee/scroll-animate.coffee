'strict'
$ = jQuery

class ScrollAnimate
  constructor: ->
    $(document).on 'ready', => @findElements()
     
  findElements: ->
    self      = @
    @elements = new Array()

    $('[data-scroll-animate]').each ->
      $element = $(this)

      self.elements.push 
        '$element'  : $element
        'loaded'    : false
        'animation' : $element.data('scroll-animate')
        'offset'    : $element.offset().top
    
    @animate()
    @intervalScroll()

  animate: ->
    queue     = 0
    allLoaded = true
  
    for index, options of @elements  
      $element = options.$element

      unless options.loaded
        allLoaded = false

        if options.offset < $(window).scrollTop() + $(window).height()
          
          $element.data('animation', options.animation)

          $element.delay(queue * 750).queue ->      
            $this     = $(this)
            animation = $this.data('animation')

            $this.css 'visibility', 'visible'
            $this.addClass("#{animation}").dequeue()

          options.loaded = true

          queue++
        
    clearInterval(@interval) if allLoaded
   
  intervalScroll: ->
    savedPosition = 0

    @interval = setInterval =>
      if $(window).scrollTop() - savedPosition > 100
        @animate()
        savedPosition = $(window).scrollTop()

      else if savedPosition > $(window).scrollTop()
        savedPosition = $(window).scrollTop()
    , 500

new ScrollAnimate()
