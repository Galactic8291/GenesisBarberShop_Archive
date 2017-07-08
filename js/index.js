(function($) {
  const htmlWindow = $(window),
    header = $('.top-bar'),
    body = $('.body'),
    mainContent = $('.main-content'),
    navigation = $('.navigation'),
    menuButton = $('.menu-button'),
    trigger = $('.trigger'),
    navigationLabel = $('.navigation-label'),
    button = $('.button'),
    space = $('.space')

  const checkViewport = () => {
    return window.getComputedStyle(document.querySelector('.main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "")
  }

  const moveItems = () => {
    const view = checkViewport()

    if (view === 'mobile' || view === 'tablet') {
      navigation.detach().prependTo(mainContent)
      navigationLabel.detach().prependTo('.navigation ul:first-child')
      button.detach().appendTo('.navigation')
      space.detach()
    } else if(view === 'desktop') {
      navigation.detach().insertAfter(header.find('.logo'))
      space.detach().appendTo('.cuts')
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

  let feed = new Instafeed({
    get: 'user',
    clientId: 'c71f283d688c4d5088c329c8575102b0',
    userId: '179067665',
    accessToken: '179067665.1677ed0.adf4d54f59854664932767899c6ddf60',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" class="cut"><img src="{{image}}" /></a>',
    limit: 12
  })

  feed.run()
  moveItems()
})(jQuery)

