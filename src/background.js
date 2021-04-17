const handleMessage = (message, sender, sendResponse) => {
  console.log(message, sender);
  switch (message.request) {
    case "query":
      chrome.tabGroups.query(message.queryInfo, result => {
        console.log(result);
        sendResponse(result);
      });
      break;
    case "update":
      chrome.tabGroups.update(message.groupId, message.updateProperties, result => sendResponse(result));
      break;
  }
};

chrome.runtime.onMessageExternal.addListener(handleMessage);