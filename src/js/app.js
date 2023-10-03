document.addEventListener("DOMContentLoaded", () => {
  const goblin = document.createElement("div");
  goblin.className = "goblin";
  let newPlace;
  setInterval(() => {
    if (document.querySelector(".goblin")) {
      let currentPlace = Number(document.querySelector(".goblin").parentNode.id);
      let newPlace;
      do {
        newPlace = Math.floor(Math.random() * 15);
        console.log(newPlace, currentPlace)
      } while (newPlace = currentPlace);
      document.querySelector(".goblin").remove();
      document.querySelectorAll(".cellTable")[newPlace].appendChild(goblin);
    } else {
      document.querySelectorAll(".cellTable")[Math.round(Math.random() * 15)].appendChild(goblin);
    }
  }, 2000);
  return true;
});
