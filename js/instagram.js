(function() {
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
})()
