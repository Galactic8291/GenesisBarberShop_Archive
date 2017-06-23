(function($) {
  const htmlWindow = $(window),
    navigationLabel = $('.navigation-label')

  const checkViewport = () => {
    return window.getComputedStyle(document.querySelector('.main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "")
  }

  const moveItems = () => {
    const view = checkViewport()

    if (view === 'mobile' || view === 'tablet') {
      navigationLabel.detach().prependTo('.navigation ul:first-child')
    } else if(view === 'desktop') {
      navigationLabel.detach()
    }
  }

  htmlWindow.on('resize', event => {
    (!window.requestAnimationFrame) ? setTimeout(moveItems, 300) : window.requestAnimationFrame(moveItems)
  })

  moveItems()
})(jQuery)

