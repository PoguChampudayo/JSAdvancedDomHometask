
chrome.runtime.onMessage.addListener(function (
  request,
  sender,
  sendResponse,
) {
  if (request.contentScriptQuery == 'queryPrice') {
    const url =
      'https://example.com/price-query?itemId=' +
      encodeURIComponent(request.itemId);

    fetch(url).then(response => {
      // ...
      sendResponse({message: true});
    });

    // 👇️ use `return true` here
    return true; // Will respond asynchronously.
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const goblin = document.createElement("div");
  goblin.className = "goblin";
  setTimeout(() => {
    // if (document.querySelector(".goblin")) {
    //   let currentPlace = document.querySelector(".goblin").parentNode.id;
    //   let newPlace;
    //   do {
    //     newPlace = Math.floor(Math.random() * 15);
    //     console.log(newPlace)
    //   } while (newPlace = currentPlace);
    //   document.querySelector(".goblin").remove();
    //   document.querySelectorAll(".cellTable")[newPlace].appendChild(goblin);
    // } else {
    //   document.querySelectorAll(".cellTable")[Math.round(Math.random() * 15)].appendChild(goblin);
    // }
    let newPlace = Math.floor(Math.random() * 15);
    document.querySelectorAll(".cellTable")[newPlace].appendChild(goblin);
    console.log('countdown!')
  }, 2000);
});

