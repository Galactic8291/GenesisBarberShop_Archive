(function($) {
  const htmlWindow = $(window),
    header = $('.top-bar'),
    body = $('.body'),
    mainContent = $('.main-content'),
    navigation = $('.navigation'),
    menuButton = $('.menu-button'),
    trigger = $('.trigger'),
    navigationLabel = $('.navigation-label'),
    button = $('.button')

  const checkViewport = () => {
    return window.getComputedStyle(document.querySelector('.main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "")
  }

  const moveItems = () => {
    const view = checkViewport()

    if (view === 'mobile' || view === 'tablet') {
      navigation.detach().prependTo(mainContent)
      navigationLabel.detach().prependTo('.navigation ul:first-child')
      button.detach().appendTo('.navigation')
    } else if(view === 'desktop') {
      navigation.detach().insertAfter(header.find('.logo'))
      navigationLabel.detach()
      button.detach()
    }
  }

  htmlWindow.on('resize', event => {
    (!window.requestAnimationFrame) ? setTimeout(moveItems, 300) : window.requestAnimationFrame(moveItems)
  })

  trigger.click(event => {
    event.preventDefault()
    $([menuButton, navigation, body]).toggleClass('nav-is-visible')
  })

  moveItems()
})(jQuery)

