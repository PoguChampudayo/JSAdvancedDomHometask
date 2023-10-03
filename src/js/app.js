document.addEventListener("DOMContentLoaded", () => {
  const goblin = document.createElement("div");
  goblin.className = "goblin";
  let newPlace
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
    newPlace = Math.floor(Math.random() * 15);
    document.querySelectorAll(".cellTable")[newPlace].appendChild(goblin);
    console.log("countdown!");
  }, 1000);
  return true;
});
