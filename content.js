chrome.runtime.sendMessage({ action: "getCookies" }, (response) => {
  const element = document.createElement("div");
  element.id = "priv8_json_element";
  element.dataset.json = JSON.stringify(response);
  document.body.appendChild(element);
});

/*
//read
const storedElement = document.getElementById('jsonElement');
const storedData = JSON.parse(storedElement.dataset.json);
console.log('Read from element:', storedData);
*/
