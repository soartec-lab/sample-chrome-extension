chrome.runtime.onMessage.addListener((message, sender) => {
	chrome.tabs.create({
		url: message.targetUrl
	}, (tab) => {
		chrome.tabs.executeScript(tab.id, {
	    code: 'const message = ' + JSON.stringify(message)
	  }, () => {
	    chrome.tabs.executeScript(tab.id, {
        file: "search_by_input_word.js"
	    })
	  })
	});
});

// ブラウザメニューから発火させる
chrome.browserAction.onClicked.addListener(tab => {
	chrome.tabs.create({
		url: "https://google.com"
	}, (tab) => {
		chrome.tabs.executeScript(tab.id, {
			file: "search_weather.js"
		});
	});
});