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
  document.querySelectorAll(".cellTable")[Math.round(Math.random() * 15)].appendChild(goblin);
  setInterval(() => {
    let currentPlace = Number(document.querySelector(".goblin").parentNode.id);
    let newPlace = getRandomInt(15, 0, currentPlace);
    document.querySelector(".goblin").remove();
    document.querySelectorAll(".cellTable")[newPlace].appendChild(goblin);
  }, 2000);
  return true;
});
