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