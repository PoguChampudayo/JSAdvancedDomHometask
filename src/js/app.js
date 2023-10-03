document.addEventListener("DOMContentLoaded", () => {
  const goblin = document.createElement("div");
  goblin.className = "goblin";
  setTimeout(() => {
    if (document.querySelector(".goblin")) {
      let currentPlace = document.querySelector(".goblin").parentNode.id;
      goblin.remove();
      let newPlace;
      do {
        newPlace = Math.floor(Math.random() * 15);
      } while (newPlace != currentPlace);
      document.querySelectorAll(".cellTable")[newPlace].appendChild(goblin);
    } else {
      document
        .querySelectorAll(".cellTable")
        [Math.round(Math.random() * 15)].appendChild(goblin);
    }
  }, 2000);
});

