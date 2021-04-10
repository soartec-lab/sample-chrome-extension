(() => {
  const googleIcon = document.querySelector('[alt="Google"]');

  googleIcon.addEventListener('click', function() {
    const message = {
      targetUrl: "https://www.google.com/",
      searchWord: '今日の為替'
    };

    chrome.runtime.sendMessage(message);
  }, false);
})();
