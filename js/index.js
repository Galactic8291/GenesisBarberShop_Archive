(function($) {
  const htmlWindow = $(window),
    mainContent = $('.main-content'),
    menuButton = $('.menu-button'),
    body = $('.body'),
    header = $('.top-bar'),
    trigger = $('.trigger'),
    navigation = $('.navigation'),
    button = $('.button'),
    navigationLabel = $('.navigation-label')

  const checkViewport = () => {
    return window.getComputedStyle(document.querySelector('.main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "")
  }

  const moveItems = () => {
    const view = checkViewport()

    if (view === 'mobile') {
      navigation.detach()
      mainContent.append(navigation)

      button.detach().insertAfter(navigation.find('ul'))
      navigationLabel.detach().prependTo('.navigation ul:first-child')
    } else if(view === 'desktop') {
      button.detach()
      navigationLabel.detach()

      navigation.detach().insertAfter(header.find('.logo'))
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

