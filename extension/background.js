
function sendMessage() {
  chrome.bookmarks.search({},
    (bookmarkItems) => {
      browser.tabs.executeScript(
        {file: "content.js"}
      ).then(() => {
        browser.tabs.query(
          {active: true, currentWindow: true}
        ).then((tabs) => {
          var msg = []
          for (item of bookmarkItems) {
            msg.push({
              title: item.title,
              url: item.url
            })
          }
          browser.tabs.sendMessage(
            tabs[0].id, {message: msg}
          )
        })
      })
    }
  )
}

function createTab() {

  browser.tabs.create({
    url: "/bookmarks.html"
  }).then(sendMessage)
}

chrome.browserAction.onClicked.addListener(createTab)

