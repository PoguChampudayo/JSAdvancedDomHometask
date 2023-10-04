function getRandomInt(max, min, outNumber) {
  let result = Math.floor(Math.random() * (max - min) + min);
  if (result == outNumber) {
    return getRandomInt(max, min, outNumber);
  } else {
    return result;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const goblin = document.createElement("img");
  goblin.className = "goblin";
  // let newPlace;
  setInterval(() => {
    if (document.querySelector(".goblin")) {
      let currentPlace = Number(
        document.querySelector(".goblin").parentNode.id
      );
      let newPlace = getRandomInt(15, 0, currentPlace);
      // do {
      //   newPlace = Math.floor(Math.random() * 15);
      //   console.log(newPlace, currentPlace);
      // } while (newPlace = currentPlace);
      // newPlace = Math.floor(Math.random() * 15);
      console.log(newPlace, currentPlace);
      document.querySelector(".goblin").remove();
      document.querySelectorAll(".cellTable")[newPlace].appendChild(goblin);
    } else {
      document
        .querySelectorAll(".cellTable")
        [Math.round(Math.random() * 15)].appendChild(goblin);
    }
  }, 2000);
  return true;
});
