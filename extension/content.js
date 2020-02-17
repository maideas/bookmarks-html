
function listener(request) {
  for (item of request.message) {
    var div = document.createElement('div')
    div.innerHTML = '<a href="' + item.url + '">' + item.title + '</a>' 
    document.body.appendChild(div)
    document.body.append('\n')
  }
  browser.runtime.onMessage.removeListener(listener)
}

browser.runtime.onMessage.addListener(listener)

