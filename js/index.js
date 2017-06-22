(function($) {
  const htmlWindow = $(window),
    menuButton = $('.menu-button'),
    body = $('.body'),
    header = $('.top-bar'),
    trigger = $('.trigger'),
    navigation = $('.navigation')

  trigger.click(event => {
    event.preventDefault()
    $([menuButton, navigation, body]).toggleClass('nav-is-visible')
  })
})(jQuery)

