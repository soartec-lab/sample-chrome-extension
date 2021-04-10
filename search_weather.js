(() => {
  "use strict";

  const searchForm = document.getElementsByName('q')[0];
  const submitFrom = document.getElementsByTagName('form')[0];

  searchForm.value = '今日の天気';
  submitFrom.submit();  
})();
