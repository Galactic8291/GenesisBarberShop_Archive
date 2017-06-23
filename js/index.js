(function($) {
  const htmlWindow = $(window)

  const checkViewport = () => {
    return window.getComputedStyle(document.querySelector('.main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "")
  }

  const moveItems = () => {
    const view = checkViewport()
  }

  htmlWindow.on('resize', event => {
    (!window.requestAnimationFrame) ? setTimeout(moveItems, 300) : window.requestAnimationFrame(moveItems)
  })
})(jQuery)

